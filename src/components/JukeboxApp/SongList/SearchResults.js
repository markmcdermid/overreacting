import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoIosCloseEmpty } from 'react-icons/lib/io';
import SearchTable from './SearchTable';

import { actions as searchActions } from '../../../redux/modules/jukebox/search';

class SearchResults extends Component {
  render() {
    const { searchText, results, searchReset, addToQueue } = this.props;
    return (
      <div className="SearchResults">
        <div className="SongList__top flex flex--align-items">
          <h1 className="h1 overflow-ellipsis h--caps h--no-margin flex-grow">
            {`Showing results for ${searchText}`}
          </h1>
          <button onClick={searchReset}>
            <IoIosCloseEmpty className="icon--xl" />
          </button>
        </div>
        <SearchTable className="SongList__table" results={results} addToQueue={addToQueue} />
      </div>
    );
  }
}
const mapStateToProps = ({ jukebox: { search: { results, text: searchText } } }) => ({ results, searchText });
const mapDispatchToProps = searchActions;
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
