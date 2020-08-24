import React from "react"
import Search from "../components/search/searchBox"
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from 'algoliasearch/lite';


const searchClient = algoliasearch('73XZM5WL9S', '14a0b078736efd854011ee929e377ed5');


export default function Header () {
  return (

	






		
    <InstantSearch searchClient={searchClient} indexName="kb-articles">
        <Search/>
        </InstantSearch>




);
}