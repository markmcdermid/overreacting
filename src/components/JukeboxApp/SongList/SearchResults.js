import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoIosCloseEmpty } from 'react-icons/lib/io';
import SearchTable from './SearchTable';

import { actions as searchActions } from '../../../redux/modules/jukebox/search';

class SearchResults extends Component {
  componentDidMount = () => this.ajax();
  componentWillReceiveProps = () => this.ajax();

  ajax() {
    const { searchRequest, searchSuccess, searchFailure } = this.props;
    const searchText = this.props.routeParams.searchText;
    searchRequest(searchText);
    var opts = {
      method: 'POST',
      body: JSON.stringify({ query: searchText }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:3001/search', opts)
      .then(results => results.json())
      .then(json => searchSuccess(json))
      .catch(e => {
        console.log(e);
        return searchFailure(e);
      });
  }

  render() {
    console.log(this.props);
    const { text, results, resetSearch, addToQueue, routeParams: { searchText } } = this.props;
    console.log('search results render');
    return (
      <div className="SearchResults">
        <div className="SongList__top flex flex--align-items">
          <h1 className="h1 overflow-ellipsis h--caps h--no-margin flex-grow">
            {`Showing results for ${searchText}`}
          </h1>
          <button onClick={resetSearch}>
            <IoIosCloseEmpty className="icon--xl" />
          </button>
        </div>
        <SearchTable className="SongList__table" results={results} addToQueue={addToQueue} />
      </div>
    );
  }
}

const mapStateToProps = ({ jukebox: { search: { results, text } } }) => ({ results, text });
const mapDispatchToProps = { ...searchActions };
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
