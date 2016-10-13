import React, { PropTypes } from 'react';

import SongDetails from './SongDetails';


const NowPlaying = ({nowPlaying: np, nextPlaying: nxp}) => (
  <section className="component--section now-playing">
    <div className="component__inner">
      <h1 className="h1 h--caps">Now Playing</h1>
      <SongDetails song={np}>
        {nxp && <SongDetails type="next" song={nxp} />}
      </SongDetails>
  </div>
  </section>
);

export default NowPlaying;
