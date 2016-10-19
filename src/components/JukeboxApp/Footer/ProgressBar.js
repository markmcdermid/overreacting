import React, { PropTypes, Component } from 'react';

class ProgressBar extends Component {
  static propTypes = {
    time: PropTypes.shape({
      start: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
    })
  };

  constructor(props) {
    super(props);
    this.timer = setInterval(this.doTime, 200);
  }

  state = { current: 0, progress: 0 }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getCurrentTime = () => {
    const timeSinceStart = new Date().getTime() - this.props.time.start;
    return timeSinceStart / 1000;
  };

  doTime = () => {
    const { duration } = this.props.time;
    let current = this.getCurrentTime();
    current = current > duration ? duration : current;
    const progress = (current / duration) * 100;
    current = this.formatTime(current);
    this.setState({ current, progress });
  }

  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  render() {
    const duration = this.formatTime(this.props.time.duration);
    return (
      <div className="progress-wrap">
        <div className="progress-time">{this.state.current}</div>
        <div className="progress-outer">
          <div className="progress" style={{ width: `${this.state.progress}%` }} />
        </div>
        <div className="progress-time">{duration}</div>
      </div>
    );
  }
}

export default ProgressBar;
