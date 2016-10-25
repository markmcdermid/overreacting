import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SearchResults from './SearchResults';
import Queue from './Queue';

const SongList = (props) => (
  <section className="component--section SongList">
    <div className="component__inner">
      { props.searchText
        ? <SearchResults />
        : <Queue />}
    </div>
  </section>
);

SongList.propTypes = {
  searchText: PropTypes.string
};

const mapStateToProps = ({ jukebox: { search: { text: searchText } } }) => ({ searchText });
export default connect(mapStateToProps)(SongList);

