const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");


const fullConfig = resolveConfig(tailwindConfig);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {

  plugins: [

    // Algolia


 
    // Typography

    `gatsby-plugin-styled-components`,

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },

    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'Kb-Articles',
          'user'
        ],
        queryLimit: 1000,
      },
    },

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
