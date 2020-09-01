import React from "react"
import { connectInfiniteHits } from 'react-instantsearch-dom';

const InfiniteHits = ({
  hits,
  hasPrevious,
  refinePrevious,
  hasMore,
  refineNext,
}) => (
  <div>
    <ol>
      {hits.map(hit => (
        <li key={hit.objectID}>{hit.name}</li>
      ))}
    </ol>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 m-2 rounded " disabled={!hasMore} onClick={refineNext}>
      Show more
    </button>
  </div>
);

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);


export default CustomInfiniteHits;