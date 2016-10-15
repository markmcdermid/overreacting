import React from 'react';
import SearchTable from './SearchTable';

import { IoClose } from 'react-icons/lib/io';

export default ({ results, addToQueue, searchText, resetSearch }) => {

  return (
    <div className="SearchResults">
      <div className="SongList__top flex flex--align-items">
        <h1 className="h1 overflow-ellipsis h--caps h--no-margin flex-grow">
          {`Showing results for ${searchText}`}
        </h1>
        <button onClick={resetSearch}>
          <IoClose className="icon--xl" />
        </button>
      </div>
      <SearchTable className="SongList__table" results={results} addToQueue={addToQueue} searchText={searchText}/>
    </div>
  )
}
