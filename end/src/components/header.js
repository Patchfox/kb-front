import React from "react"
import Search from "../components/search/searchBox"
import { InstantSearch } from "react-instantsearch-dom";
import Logo  from "../components/assets/logo.svg"
import { searchClient } from "./constants"







export default function Header ( ) {
  return (
   
      <div className="header flex flex-wrap items-center z-10  top-0 justify-center bg-gray-200 border-b border-grey-light px-10 py-10"> 
         <div className=" w-48 sm:w-64  " >
         <Logo/> 
         </div>   
          <div className="sm:block w-64 font-bold mt-2 sm:mt-0   sm:px-10 text-center" >
          <p>Knowledge Base</p>  
          </div>
         <div className="flex-grow px-2 mt-4 md:mt-0">
        <InstantSearch 
        searchClient={searchClient}
        indexName="kb-articles"
        >
          <Search/>
        </InstantSearch>
      </div>

     
      
</div>



 

);
}