import React from "react"
import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    Hits,
 
    Highlight,
  } from 'react-instantsearch-dom';
import Pagination from "./pagination"
 


const searchClient = algoliasearch('73XZM5WL9S', 'ea73ad9dde21e451df2a2d13c0e3fe15');



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
    <InstantSearch 
    searchClient={searchClient} 
    indexName="kb-articles"

    >
    <div className="search-panel flex">
                <div className="search-panel__results text-center mx-auto mt-2 w-3/4 px-4 py-2">
                      <Content/>
                  <div className="flex flex-wrap justify-center mt-20">
                    <Pagination />
                  </div>
                </div>
                </div>
            
    </InstantSearch>



    );
}