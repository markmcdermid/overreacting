import React, { PropTypes } from 'react';

import ProgressBar from './ProgressBar';

const footer = (props) => {
  const { time, getNewSong } = props;
  return (
    <footer className="hf hf--footer" onClick={getNewSong}>
      <div className="hf__inner">
        <ProgressBar time={time} />
      </div>
    </footer>
  );
};

export default footer;
