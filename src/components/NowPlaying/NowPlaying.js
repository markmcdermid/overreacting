import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SongDetails from './SongDetails';

const NowPlaying = props => (
  <section className="component--section now-playing">
    <div className="component__inner">
      <h1 className="h1 h--caps">Now Playing</h1>

      <SongDetails song={props.song}>
        { props.queue[0] && <SongDetails next song={props.queue[0]} /> }
      </SongDetails>

    </div>
  </section>
);

NowPlaying.propTypes = {
  queue: PropTypes.arrayOf(PropTypes.object),
  tv: PropTypes.bool
}

const mapStateToProps = ({ jukebox: { playing: { queue, nowPlaying: song } } }) => ({ queue, song });
export default connect(mapStateToProps)(NowPlaying);
