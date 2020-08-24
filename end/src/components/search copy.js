import React from "react"
import { SearchBox } from "react-instantsearch-dom"

function Search () {
    return (
        <div className="'search pt-2 relative mx-auto text-gray-600">
    
            <SearchBox
                className="searchbox border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                translations={{
                    placeholder: '',
                    searchAsYouType: false,
                    cssClasses: {
                        input: 'myCustomInput'
                    }
                }}
    />

        </div>
    )
}

export default Search