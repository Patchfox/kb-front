

const pageQuery = `{
    allStrapiKbArticle {
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

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
    return {
      objectID: id,
      ...frontmatter,
      ...fields,
      ...rest,
    }
  }

const queries = [
    {
      query: pageQuery,
      transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
      settings: { attributesToSnippet: [`excerpt:20`] },
    },
  ]


module.export =queries