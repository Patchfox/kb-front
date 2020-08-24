const myQuery = `  
     {
      allStrapiKbArticles {
        edges {
          node {
            id
            title
            content
          }
        }
      }
    }
  `
    
    const queries = [
      {
        query:myQuery,
        transformer: ({ data }) => data.allStrapiKbArticles.edges.map(({ node }) => node), // optional
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries, // overrides main index name, optional
        settings: {
          // optional, any index settings
        },
        matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
      },
    ];

    module.exports = queries