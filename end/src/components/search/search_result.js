import React from "react"
import algoliasearch from 'algoliasearch/lite';
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


export default function SearchResult () {
  return (
    <InstantSearch searchClient={searchClient} indexName="kb-articles">
    <div className="search-panel flex">
                <div className="search-panel__results flex text-center px-4 py-2 m-2">
                  <div className="pagination">
                      <Content/>
                    <Pagination />
                  </div>
                </div>
              </div>
    </InstantSearch>



    );
}