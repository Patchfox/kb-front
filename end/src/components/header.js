import React from "react"
import Search from "../components/search/searchBox"
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from 'algoliasearch/lite';


const searchClient = algoliasearch('73XZM5WL9S', '14a0b078736efd854011ee929e377ed5');



export default function Header () {
  return (
    <nav class="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
       <div class="pl-4 flex items-center">
         <div className="logo"></div>
          <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"  href="#"> 
          Knowledge-Base
          </a>
       </div>
       <div class="block lg:hidden pr-4">
          <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-purple-500 appearance-none focus:outline-none">
             <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
             </svg>
          </button>
       </div>
       <div class="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20" id="nav-content">
          <div class="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
             <div class="relative pull-right pl-4 pr-4 md:pr-0">
               <InstantSearch searchClient={searchClient} indexName="kb-articles">
               <Search/>
               </InstantSearch>
              </div>
            </div>
          </div>
     
          </div>
 </nav>
 

);
}