import React, {PropTypes} from 'react';

const NowPlaying = ({nowPlaying: np}) => {
  return (
    <section className="now-playing">
      <div className="inner">
        <h1>Now Playing</h1>
        <div className="details">
          <img src={require('../../../img/' + np.img)} />
          <div className="details-text">
            <p className="title">X {np.title}</p>
            <p className="artist">X {np.artist}</p>
            <p className="requestedBy">X {np.requestedBy}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NowPlaying;
