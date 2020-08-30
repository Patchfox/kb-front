import React, { Component } from 'react';
import { connectPagination } from 'react-instantsearch-dom';
import MaterialPagination from '@material-ui/lab/Pagination';

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => (
  <ul>
    {new Array(nbPages).fill(null).map((_, index) => {
      const page = index + 1;
      const style = {
        fontWeight: currentRefinement === page ? '' : '',
      };
      
  

      return (   
     
          
 <MaterialPagination variant="outlined"   style={style}   onClick={event => {
              event.preventDefault();
              refine(page);
            }} href={createURL(page)} count={page} shape="rounded" >
     </MaterialPagination>
     
      );
    })}
  </ul>
);

const CustomPagination = connectPagination(Pagination);

export default CustomPagination

