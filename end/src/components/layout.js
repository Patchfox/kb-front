import React from "react"
import Header from "../components/header";





export default function Layout({children}) {
  return (

    <div className="top-0 tracking-wider tracking-normal">
    <Header/>
    {children}
    </div>
 
  );
}




// export default function Layout({ children }) {
//   return (
//     <div className="top-0 tracking-wider tracking-normal">
//       <Header/> 
//       {children}
//   </div>
  
//   )
// }

