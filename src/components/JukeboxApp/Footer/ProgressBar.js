import React from 'react';

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time - (minutes * 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
}

const ProgressBar = ({ time: { currentTime, endTime } }) => {
  const progress = (currentTime / endTime) * 100;
  const total = formatTime(endTime);
  const current = formatTime(currentTime);
  return (
    <div className="progress-wrap">
      <div className="progress-time">{current}</div>
      <div className="progress-outer">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-time">{total}</div>
    </div>
  );
};

export default ProgressBar;
