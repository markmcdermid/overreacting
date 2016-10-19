import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchResults from './SearchResults';
import Queue from './Queue';

class SongList extends Component {
  render() {
    console.log('pua render');
    console.log(this.props);
    console.log(this.props.searchText);
    return (
      <section className="component--section SongList">
        <div className="component__inner">
          { this.props.searchText
            ? <SearchResults/>
            : <Queue />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ jukebox: { search: { text: searchText } } }) => ({ searchText });
export default connect(mapStateToProps)(SongList);

