import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';

const appsearchConnector = new AppSearchAPIConnector({
    searchKey: process.env.GATSBY_AS_SEARCH_KEY,
    engineName: process.env.GATSBY_AS_INDEX_NAME,
    endpointBase: process.env.GATSBY_AS_ENDPOINT,
    cacheResponses: false
  });

  export default appsearchConnector
