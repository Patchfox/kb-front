import React from "react"
import {
    InstantSearch,
    Hits,
 
    Highlight,
  } from 'react-instantsearch-dom';
import Pagination from "./pagination";
import { searchClient } from "../constants"
import CustomInfiniteHits from "./infiniteHit";
 




const Content = () =>
<div className="content">
  <Hits hitComponent={Hit}/>
</div>



function Hit(props) {
  return (
    <article>
      <div className="flex bg-gray-300">
      <h1>
        <Highlight attribute="title" hit={props.hit} />
       
      </h1> 
  </div>
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
                    <CustomInfiniteHits/>
                  </div>
                </div>
                </div>
            
    </InstantSearch>



    );
}