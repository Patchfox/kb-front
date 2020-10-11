{require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const myQuery = `  
     {
      allStrapiKbArticles {
        edges {
          node {
            id
            title
            content
            updated_at(formatString: "MMMM DD, YYYY HH:mm" locale: "de")
            created_by {
              firstname
              lastname
            }
            updated_by {
              firstname
              lastname
            }
            slug
          }
        }
      }
    }
  `
    
    const queries = [
      {


       
        query:myQuery,
        transformer: ({ data }) => data.allStrapiKbArticles.edges.map(({ node }) => node), // optional
        indexName: process.env.GATSBY_AS_INDEX_NAME, // for all queries, // overrides main index name, optional
        settings: {
          // optional, any index settings
        },
       // matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
      },
    ];

    module.exports = queries
  }