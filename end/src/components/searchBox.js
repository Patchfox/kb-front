import React from "react"
import Searchbox  from "@elastic/react-search-ui"

export default Custom_SearchBox(() => (

    
        
              <div className="flex border border-gray-200 rounded-full p-1 shadow  border-2 .text-base bg-white  focus:outline-none">
                <Searchbox
                    view={({ onChange, value, onSubmit }) => (
                    <form className="SearchForm mb-0" onSubmit={onSubmit}>

      <div className="search-icon pr-2 pt-1">
                   <svg className="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                   </svg>
                </div>

                     <input value={value} onChange={e => onChange(e.currentTarget.value)} />
                    </form>
                    )}
/>           
                
            </div>   
           
   
 
                    )
  )