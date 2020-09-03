import React, { Component } from 'react';

import {
  connectPagination,
} from 'react-instantsearch-dom';




const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

 



const Pagination = ({ padding = 2, refine, currentRefinement, nbPages }) => (

  <>
    
    <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 m-2 rounded ">
    <button 
    className ="focus:outline-none"
    onClick={() => refine(1)}>First</button></span>
    {range(
      Math.max(1, currentRefinement - padding),
      Math.min(nbPages, currentRefinement + padding)
    ).map(page => (
      <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold  py-2 px-4 m-2 rounded "> <button
       
        className ="focus:outline-none"
        key={page}
        onClick={() => refine(page)}
        style={{
          color: currentRefinement === page ? 'bold' : 'unset',
        }}
      >
        {page}
      </button></span>
    ))}
  
      {nbPages > 1 &&
     <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded m-2">
       <button  className ="focus:outline-none" onClick={() => refine(currentRefinement +1)}>Next</button> </span> }
     
        <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 m-2  rounded">
    <button className ="focus:outline-none" onClick={() => refine(nbPages)}> </button>Last</span>

  </>
);

const ConnectedPagination = connectPagination(Pagination);

export default ConnectedPagination; 
