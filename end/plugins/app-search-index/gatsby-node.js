const AppSearchClient =  require('@elastic/app-search-node');
const chunk = require('lodash.chunk');
const report = require('gatsby-cli/lib/reporter');
const { ExperimentalConfigureRelatedItems } = require('react-instantsearch-dom');
const { func } = require('prop-types');


/**
 * give back the same thing as this was called with.
 *
 * @param {any} obj what to keep the same
 */
const identity = (obj) => obj;


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
   
    const result = await resolveAfter2Seconds();
    const result1 = await getEngine(client,engine);
    console.log (result)
    console.log (result1)

    activity.end();  

})
};


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}


const getEngine =  (client, engine) => {
 client
 .listDocuments(engine)
 .then(function (response) {
      console.log("test")
      return response
    
    })
    .catch(error => console.log(error.errorMessages))
    

 

}


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


