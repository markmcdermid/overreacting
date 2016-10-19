import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SongDetails from './SongDetails';

const NowPlaying = (props) => {
  console.log('Now Playing');
  console.log(props);
  return (
    <section className="component--section now-playing">
      <div className="component__inner">
        <h1 className="h1 h--caps">Now Playing</h1>
        <SongDetails song={props.playing.nowPlaying}>
          {props.playing.queue[0] && <SongDetails type="next" song={props.playing.queue[0]} />}
        </SongDetails>
      </div>
    </section>
  );
};

NowPlaying.propTypes = {
  playing: PropTypes.shape({
    nowPlaying: PropTypes.object,
    queue: PropTypes.array
  })
};

const mapStateToProps = ({ jukebox: { playing } }) => ({ playing });
export default connect(mapStateToProps)(NowPlaying);
