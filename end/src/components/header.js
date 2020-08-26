import React from "react"
import Search from "../components/search/searchBox"
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from 'algoliasearch/lite';
import Logo  from "../components/assets/logo.svg"


const searchClient = algoliasearch('73XZM5WL9S', '14a0b078736efd854011ee929e377ed5');

export default function Header () {
  return (
    <div class="relative w-full z-10  top-0 bg-gray-200 border-b border-grey-light">    
      <div class="flex items-center md:justify-between justify-center ml-4 px-10 py-10"> 
         <div className="w-64  " >
         <Logo/> 
        
         </div>   
          <div className="hidden sm:block w-64 font-bold px-10 text-center" >
          <p>Knowledge Base</p>  
          </div>
          <div className=" block sm:hidden w-64 font-bold px-10 text-center" >
          <p>KB</p>  
          </div>
         <div class="flex-grow hidden md:block">
        <InstantSearch searchClient={algoliasearch}>
          <Search/>
        </InstantSearch>
      </div>
          <button id="nav-toggle" class="block md:hidden flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-purple appearance-none focus:outline-none">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
          </button>
         <div class="search-icon cursor-pointer pl-6">
    
           </div>
      </div>
      
</div>



 

);
}