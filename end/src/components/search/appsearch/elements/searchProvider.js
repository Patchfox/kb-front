import React from "react";
import connector from "./SearchConnector"
import {SearchProvider} from "@elastic/react-search-ui"



export default function Custom_SearchProvider({children}) {
  return (
    <SearchProvider
      config={{
        apiConnector: connector,
        autocompleteQuery: {
          results: {
            result_fields: { 
                title: {
                    snippet: {
                      size: 100,
                      fallback: true
                    }
                  },
                  slug: {
                    raw: {}
                  },
                  updated_at: {
                    raw: {}
                  },
                  content: {
                    snippet: {
                      size: 100, // size of the description field, i.e. the text displayed
                      fallback: true
                    }
                  }
            }
          }
        },
        searchQuery: {
         
        },
        initialState: {
          resultsPerPage: 10
        }
      }}
      
    >
     {{children}}
    </SearchProvider>
  );
}


