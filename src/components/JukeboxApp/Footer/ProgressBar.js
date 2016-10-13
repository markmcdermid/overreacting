import React from 'react';

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return minutes + ':' + seconds;
}

export default ({ time: { currentTime: ct, endTime: endTime }}) => {
  let progress = (ct / endTime) * 100;
  let totalTime = formatTime(endTime);
  let currentTime = formatTime(ct);
  return (
    <div className="progress-wrap">
      <div className="progress-time">{currentTime}</div>
      <div className="progress-outer">
        <div className="progress" style={{width: progress + '%'}}></div>
      </div>
      <div className="progress-time">{totalTime}</div>
    </div>
  )
}
