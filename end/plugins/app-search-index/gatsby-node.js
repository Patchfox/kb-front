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
  const test = await client.listDocuments(engine)
  return test
};


exports.onPostBuild = async function (
    { graphql },
    {
      baseUrl,
      apiKey,
      queries,
      settings: mainSettings,
      engine: mainIndexName,
      chunkSize = 1000,
      enablePartialUpdates = false,
      
  
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
      settings = mainSettings,
    },
    i
  ){   

    if (!query) {
      report.panic(
        `failed to index to Algolia. You did not give "query" to this query`
      );
      }


     
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
      const ID = curObj.objectID;
      let extObj = ASObjects[ID];

    /* The object exists so we don't need to remove it from Algolia */
      delete ASObjects[ID];
      delete currentIndexState.toRemove[ID];

      if (!extObj) return true;

      return !!matchFields.find((field) => extObj[field] !== curObj[field]);
    });
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
const blub = await IndexAppSearchObjects(client, engine, hasChanged)
console.log (blub)
}catch(err){console.log (err)}
// setStatus(activity, `query ${i}: splitting in ${chunks.length} jobs`);
//     /* Add changed / new objects */
//     const chunkJobs = chunks.map(async function (chunked) {
    
      
//     });

//     await Promise.all(chunkJobs);

})   

try {
  await Promise.all(jobs);

} catch (err) {
  report.panic(`failed to index to Algolia`, err);
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