const AppSearchClient =  require('@elastic/app-search-node');
const chunk = require('lodash.chunk');
const report = require('gatsby-cli/lib/reporter');
const { ThemeConsumer } = require('styled-components');


/**
 * give back the same thing as this was called with.
 *
 * @param {any} obj what to keep the same
 */
const identity = (obj) => obj;


// Fetch all indices of AppSearch 


async function fetchAppSearchObjects (engine, client) {
  const content = await client.listDocuments(engine)
  const results = {};
  if (Array.isArray(content.results)) {
    content.results.forEach((result) => {
      results[result.id] = result;
    });
  return results
};
};

exports.onPostBuild = async function (
    { graphql },
    {
      baseUrl,
      apiKey,
      queries,
 //     settings: mainSettings,
      engine: mainIndexName,
      chunkSize = 1000,
      enablePartialUpdates = true,
      //
      matchFields: mainMatchFields = ['updated_at'],
      
  
}

) {
    const activity = report
    .activityTimer(`index to AppSearch`);
    activity.start();
    const baseUrlFn = () => baseUrl
    const client = new AppSearchClient(undefined, apiKey, baseUrlFn);


    setStatus(activity, `${queries.length} queries to index`);


    const indexState = {};

    const jobs = queries.map(async function doQuery(
    {
      engine = mainIndexName,
      query,
      transformer = identity,
   //   settings = mainSettings,
      matchFields = mainMatchFields,
    },
    i
  ){   

    if (!query) {
      report.panic(
        `failed to index to AppSearch. You did not give "query" to this query`
      );
    }
      if (!Array.isArray(matchFields) || !matchFields.length) {
        return report.panic(
          `failed to index to AppSearch. Argument matchFields has to be an array of strings`
        );
      }


    /* Use to keep track of what to remove afterwards */
      if (!indexState[engine]) {
        indexState[engine] = {
          engine,
          toRemove: {},
        };
      }
      const currentIndexState = indexState[engine];

    
  

  setStatus(activity, `query #${i + 1}: executing query`);
  const result = await graphql(query);
  if (result.errors) {
    report.panic(`failed to index to AppSearch`, result.errors);
  }

  const objects = (await transformer(result)).map((object) => ({
    objectid: object.objectid || object.id,
    ...object,
  }));

  if (objects.length > 0 && !objects[0].objectid) {
    report.panic(
      `failed to index to AppSearch. Query results do not have 'objectID' or 'id' key`
    );
  }

  setStatus(
    activity,
    `query ${i}: graphql resulted in ${Object.keys(objects).length} records`
  );

  let hasChanged = objects;
  let ASObjects = {};
  if (enablePartialUpdates) {
    setStatus(activity, `query ${i}: starting Partial updates`);

  ASObjects = await fetchAppSearchObjects(engine, client)
  console.log (ASObjects)

  const nbMatchedRecords = Object.keys(ASObjects).length;
  setStatus(
    activity,
    `query ${i}: found ${nbMatchedRecords} existing records`
    
  );

  if (nbMatchedRecords) {
      hasChanged = objects.filter(curObj => {
      const id = curObj.objectid;
      console.log(ASObjects[id])
      let extObj = ASObjects[id];

    /* The object exists so we don't need to remove it from Algolia */
      delete ASObjects[id];
      delete currentIndexState.toRemove[id];

  // für neue Indixeinträge, wenn kein Objekt mit der ID existiert, wird es mit true ins Array geschrieben 
  // für Indxing
      if (!extObj) return true;
      
  //wertet das Array (z.B. modified usw.) matchField immer auf 
  //Usrpungsaudruck aus und ob das Feld ungleich dem anderen ist
      return !!matchFields.find((field) => extObj[field] !== curObj[field]);
    });
   // Setzt alle AppSearch bestehenden Indexeinträge im toRemove Array auf true, für löschung
    Object.keys(ASObjects).forEach(
      objectID => (currentIndexState.toRemove[objectID] = true)
    );
  }
    setStatus(
      activity,
      `query ${i}: Partial updates – [insert/update: ${hasChanged.length}, total: ${objects.length}]`
    );
}


const chunks = chunk(hasChanged, chunkSize);
try {
if(hasChanged.length != 0 ) {
const newIndices = await IndexAppSearchObjects(client, engine, hasChanged)
console.log (newIndices)}
}catch(err){console.log (err)}
 setStatus(activity, `query ${i}: splitting in ${chunks.length} jobs`);
     /* Add changed / new objects */
    const chunkJobs = chunks.map(async function (chunked) {
    
      
    });

     await Promise.all(chunkJobs);

})   

try {
  await Promise.all(jobs);

  if (enablePartialUpdates) {
    /* Execute once per index */
    /* This allows multiple queries to overlap */
    const cleanup = Object.keys(indexState).map(async function (engine) {
      const state = indexState[engine];
      const isRemoved = Object.keys(state.toRemove);
      console.log (isRemoved)

      if (isRemoved.length) {
        setStatus(
          activity,
          `deleting ${isRemoved.length} objects from ${engine} index`
        );
         const destryed = await client.destroyDocuments(state.engine, isRemoved);
        return destryed
      }
    });

    await Promise.all(cleanup);
  }

} catch (err) {
  report.panic(`failed to index to AppSearch`, err);
}

activity.end();  
};


async function IndexAppSearchObjects (client, engine, documents) {
  try {
  const test = await client.indexDocuments(engine, documents)
  return test
}
catch (err) {
  console.log (err)
}
};

/**
 * Hotfix the Gatsby reporter to allow setting status (not supported everywhere)
 *
 * @param {Object} activity reporter
 * @param {String} status status to report
 */
function setStatus(activity, status) {
  if (activity && activity.setStatus) {
    activity.setStatus(status);
  } else {
    console.log('AppSearch:', status);
  }
}

// // Check if engine exists and create if not

//     client.getEngine(engine)
//     .then(response => {
//       if (!response)
//       client
//       .createEngine(engine, { language: 'en' })
//       .then (response => console.log (response))
//       .catch  (error => console.log(console.errorMessages))
//        }
//       )
//     .catch (error => console.log (error.errorMessages))