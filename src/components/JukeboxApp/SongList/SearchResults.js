import React from 'react';
import { connect } from 'react-redux';
import { IoIosCloseEmpty } from 'react-icons/lib/io';
import SearchTable from './SearchTable';

const SearchResults = (props) => {
  const { text, results, resetSearch, addToQueue } = props;
  console.log('search results render');
  return (
    <div className="SearchResults">
      <div className="SongList__top flex flex--align-items">
        <h1 className="h1 overflow-ellipsis h--caps h--no-margin flex-grow">
          {`Showing results for ${text}`}
        </h1>
        <button onClick={resetSearch}>
          <IoIosCloseEmpty className="icon--xl" />
        </button>
      </div>
      <SearchTable className="SongList__table" results={results} addToQueue={addToQueue} />
    </div>
  );
};

const mapStateToProps = ({ jukebox: { search: { results, text } } }) => ({ results, text });
export default connect(mapStateToProps)(SearchResults);
