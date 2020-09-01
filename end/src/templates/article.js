import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiKbArticles.title}</h1>
    <p dangerouslySetInnerHTML ={{__html : data.strapiKbArticles.content }}></p>
   
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiKbArticles(id: {eq: $id}) {
      title
      content
    }
  }
`