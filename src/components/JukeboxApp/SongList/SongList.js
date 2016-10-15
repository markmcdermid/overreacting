import React from 'react';

import SearchResults from './SearchResults';
import Queue from './Queue';

export default ({ queue, playlists, selectPlaylist, addToQueue, search, resetSearch, searchResults }) => {
  return (
    <section className="component--section SongList">
      <div className="component__inner">
        { search
          ? <SearchResults results={searchResults} addToQueue={addToQueue} searchText={search} resetSearch={resetSearch} />
          : <Queue queue={queue} playlists={playlists} selectPlaylist={selectPlaylist} />
        }
      </div>
    </section>
  );
};
