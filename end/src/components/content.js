import React from "react"
import SearchResult from '../components/search/search_result';
import SidebarFilter from "../components/sidebar_filter";
import ContentMenu from "../components/content-menu";

export default function Content ({ children })  {
  return (
    <div className="mx-auto w-full h-screen">
    <ContentMenu/>  
    <div className="mx-auto h-auto w-3/4 px-4  ">
    <SearchResult/>
     </div>

  </div>
  
  )
}
