import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { IoIosCloseEmpty } from 'react-icons/lib/io';
import SearchTable from './SearchTable';

import { actions as searchActions } from '../../../redux/modules/jukebox/search';

const SearchResults = props => (
  <div className="SearchResults">
    <div className="SongList__top flex flex--align-items">
      <h1 className="h1 overflow-ellipsis h--caps h--no-margin flex-grow">
        {`Showing results for ${props.searchText}`}
      </h1>
      <button onClick={props.searchReset}>
        <IoIosCloseEmpty className="icon--xl" />
      </button>
    </div>
    <SearchTable className="SongList__table" results={props.results} />
  </div>
);

SearchResults.propTypes = {
  searchText: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchReset: PropTypes.func.isRequired
};

const mapStateToProps = ({ jukebox: { search: { results, text: searchText } } }) => ({ results, searchText });
export default connect(mapStateToProps, searchActions)(SearchResults);
