import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Search as SearchIcon } from "@styled-icons/fa-solid"



export default connectSearchBox(
  ({ refine, currentRefinement, onFocus }) => (
    <div className="flex justify-center pt-20">
       <div>
        <img class="w-2/3 ml-auto mr-auto mb-6" src="https://dieneue1077.de/files/media/styles/adaptive_500px/adaptive-image/public/logo_stadtwerke_stuttgart_mit_claim_rgb.jpeg.jpg"/>
          <form className="SearchForm mb-0">
              <div className="flex border border-gray-200 rounded-full p-4 shadow text-xl border-2  bg-white  focus:outline-none">
              <div>🕵️‍</div>
                <input
                  className="SearchInput w-full outline-none px-3"
                  type="text"
                  placeholder="Search for a know how"
                  aria-label="Search"
                  onChange={e => refine(e.target.value)}
                  value={currentRefinement}
                  onFocus={onFocus}   
                /> 
              <div>🎤</div>
            </div>   
          </form>   
        </div>
    </div>
  )
)