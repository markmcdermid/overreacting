import React, { PropTypes } from 'react';
import { IoAndroidRefresh, IoClose } from 'react-icons/lib/io';
import { connect } from 'react-redux';

import SongDetails from './SongDetails';

const NowPlaying = props => (
  <section className="component--section now-playing">
    <div className="component__inner">
      <h1 className="h1 h--caps">Now Playing</h1>

      { props.isFetching && <IoAndroidRefresh className="icon--xxxl animate--spin" /> }
      { props.errorMsg && <IoClose className="icon--xxxl icon--danger" />}
      <SongDetails />
      { /* {props.queue[0] && <SongDetails type="next" song={props.queue[0]} />} */ }
    </div>
  </section>
);

NowPlaying.propTypes = {
  queue: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  errorMsg: PropTypes.string
};

const mapStateToProps = ({ jukebox: { playing: { queue, isFetching, errorMsg } } }) => ({ queue, isFetching, errorMsg });
export default connect(mapStateToProps)(NowPlaying);
