import React from 'react';

import ProgressBar from './footer/ProgressBar';

export default (props) => {
  console.log(props);
  var { time, getNewSong } = props;
  return (
    <footer onClick={getNewSong}>
      <div className="inner">
        <ProgressBar time={time}></ProgressBar>
      </div>
    </footer>
  )
}
