import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SongDetails from './SongDetails';

const NowPlaying = (props) => {
  console.log('now playing render');
  return (
    <section className="component--section now-playing">
      <div className="component__inner">
        <h1 className="h1 h--caps">Now Playing</h1>
        <SongDetails song={props.nowPlaying}>
          {props.queue[0] && <SongDetails type="next" song={props.queue[0]} />}
        </SongDetails>
      </div>
    </section>
  );
};

NowPlaying.propTypes = {
  nowPlaying: PropTypes.object.isRequired,
  queue: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({ jukebox: { playing: { nowPlaying, queue } } }) => ({ nowPlaying, queue });
export default connect(mapStateToProps)(NowPlaying);
