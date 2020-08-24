<<<<<<< HEAD
import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import Layout from "../components/layout"
import Header from "../components/header"
import Search from "../components/search/searchBox"
import "../css/style.css"
import {
  InstantSearch,
  Hits,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';




const searchClient = algoliasearch('73XZM5WL9S', '14a0b078736efd854011ee929e377ed5');



const Content = () =>
<div className="content">
 
  <Hits hitComponent={Hit}/>

</div>



function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="title" hit={props.hit} />
      </h1> 
  
    </article>
  );
}

export default function Home() {
  
    return (
      <Layout>
        <div>
      
          <div className="container">
            <InstantSearch searchClient={searchClient} indexName="kb-articles">
              <Header/>
              <div className="search-panel flex">
                <div className="search-panel__results flex text-center px-4 py-2 m-2">
                  <div className="pagination">
                    <Pagination />
                  </div>
                </div>
              </div>
            </InstantSearch>
          </div>
        </div>
      </Layout>
    );
}
=======
import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import { ThemeProvider } from "styled-components"
import StyledSearchBox from "../components/styled-search-box"
import StyledSearchResult from "../components/styled-search-result"
import StyledSearchRoot from "../components/styled-search-root"
import useClickOutside from "../components/use-click-outside"
const theme = {
  foreground: "#050505",
  background: "white",
  faded: "#888",
}
export default function Search({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  useClickOutside(rootRef, () => setFocus(false))
  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef}>
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
          />
        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  )
  }
>>>>>>> 6aecddddf7187fcea7e28498b9e2bf798e7c79cb
