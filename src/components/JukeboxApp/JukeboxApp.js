import React, {Component} from 'react';

import Header from './Header';
import Footer from './Footer';
import NowPlaying from './NowPlaying/NowPlaying';
import Request from './Request';
import Queue from './Queue/Queue';

import {
  queue,
  nowPlaying
} from '../../data';

class JukeboxApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      endTime: 60,
      queue,
      nowPlaying
    };
  }

  componentDidMount() {
    // I haven't actually done the timings for this properly, sue me.
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getNewSong() {
    let nextPlay = this.state.queue[0];
    let newQ = [...this.state.queue];
    newQ.shift();
    this.setState({ nowPlaying: nextPlay, queue: newQ, currentTime: 0, endTime: 60 })
  }

  tick() {
    let current = this.state.currentTime + 1;
    this.setState({ currentTime: current });

    if (this.state.currentTime === this.state.endTime) {
      this.getNewSong();
    }
  }

  addToQueue(newTitle) {
    let newItem = {
      id: Date.now(),
      title: newTitle,
      artist: 'Oh yeah that guy.',
      requestedBy: 'You',
      img: 'cactus.jpg'
    };

    let newQ = [...this.state.queue, newItem];
    this.setState({queue: newQ});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main-content">
          <NowPlaying nowPlaying={this.state.nowPlaying}></NowPlaying>
          <Request addToQueue={this.addToQueue.bind(this)}></Request>
          <Queue queue={this.state.queue}></Queue>
        </div>
        <Footer getNewSong={this.getNewSong.bind(this)} time={{currentTime: this.state.currentTime, endTime: this.state.endTime}}></Footer>
      </div>
    )
  }
}

export default JukeboxApp;
