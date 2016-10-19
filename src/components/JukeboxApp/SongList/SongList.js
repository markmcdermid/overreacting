import React from 'react';

import SearchResults from './SearchResults';
import Queue from './Queue';

const SongList = ({ queue, categories, selectPlaylist, addToQueue, search, resetSearch, searchResults }) => {
  return (
    <section className="component--section SongList">
      <div className="component__inner">
        { !search
          ? <SearchResults addToQueue={addToQueue} resetSearch={resetSearch} />
          : <Queue queue={queue} categories={categories} selectPlaylist={selectPlaylist} />
        }
      </div>
    </section>
  );
};

export default SongList;
