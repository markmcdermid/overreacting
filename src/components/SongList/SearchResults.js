import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import IoIosCloseEmpty from 'react-icons/lib/io/ios-close-empty';
import $ from 'jquery';

import SearchTable from './SearchTable';

import { actions as searchActions } from 'redux/modules/jukebox/search';


function scrollTo(element, duration = 1000) {
  $('html, body').animate({
    scrollTop: $(element).offset().top
  }, duration);
}

class SearchResults extends Component {
  componentDidMount = () => scrollTo(this.node, 0, 600)
  componentDidUpdate = () => scrollTo(this.node, 0, 600)

  render() {
    return (
      <div ref={node => this.node = node} className="SearchResults">
        <div className="SongList__top flex flex--align-items">
          <h1 className="h1 overflow-ellipsis h--caps h--no-margin flex-grow">
            {`Showing results for ${this.props.searchText}`}
          </h1>
          <button onClick={this.props.searchReset}>
            <IoIosCloseEmpty className="icon--xl" />
          </button>
        </div>
        <SearchTable className="SongList__table" results={this.props.results} />
      </div>
    );
  }
}

SearchResults.propTypes = {
  searchText: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchReset: PropTypes.func.isRequired
};

const mapStateToProps = ({ jukebox: { search: { results, text: searchText } } }) => ({ results, searchText });
export default connect(mapStateToProps, searchActions)(SearchResults);
