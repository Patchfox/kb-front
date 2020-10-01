import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>

    <div className="mx-auto w-full h-screen">
    <div className="mx-auto h-auto w-1/2 px-4 py-4 ">
    <h1 className ="text-5xl">{data.strapiKbArticles.title}</h1>
    <div className="py-4" dangerouslySetInnerHTML ={{__html : data.strapiKbArticles.content }}></div>
   </div></div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String) {
    strapiKbArticles(id: {eq: $id}) {
      title
      content
    }
  }
`