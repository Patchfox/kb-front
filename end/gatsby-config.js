const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
<<<<<<< HEAD
=======
require("dotenv").config()


>>>>>>> 6aecddddf7187fcea7e28498b9e2bf798e7c79cb
const fullConfig = resolveConfig(tailwindConfig);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


 
    

module.exports = {

  
  
  plugins: [

    

    // Algolia
<<<<<<< HEAD
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
        queries: require("./src/components/search/algolia"),
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
        },
        enablePartialUpdates: true, // default: false
        matchFields: ['slug', 'modified'], // Array<String> default: ['modified']
      },
    },
   
=======
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    },

    //Strapi 

    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "kbArticles",
          "user",
        ],
        queryLimit: 1000,
      },
    },

>>>>>>> 6aecddddf7187fcea7e28498b9e2bf798e7c79cb

    // Typography

    `gatsby-plugin-styled-components`,


    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    // PostCSS

    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
        ],
      },
    },

  ],
}
