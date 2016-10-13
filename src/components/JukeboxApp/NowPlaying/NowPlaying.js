import React, { PropTypes } from 'react';

import SongDetails from './SongDetails';


const NowPlaying = ({ nowPlaying, nextPlaying }) => (
  <section className="component--section now-playing">
    <div className="component__inner">
      <h1 className="h1 h--caps">Now Playing</h1>
      <SongDetails song={nowPlaying}>
        {nextPlaying && <SongDetails type="next" song={nextPlaying} />}
      </SongDetails>
    </div>
  </section>
);

NowPlaying.propTypes = {
  nowPlaying: PropTypes.object.isRequired,
  nextPlaying: PropTypes.object
};

export default NowPlaying;
