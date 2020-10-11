import { func } from 'prop-types';
import {Custom_SearchProvider} from "./search/appsearch";



export default function searchContainer ({children}) {
    return (

        <Custom_SearchProvider>
            {children}
        </Custom_SearchProvider>

    )
}