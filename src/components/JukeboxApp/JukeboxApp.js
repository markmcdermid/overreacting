import React, { Component } from 'react';


import Header from './Header';
import Footer from './Footer/Footer';
import NowPlaying from './NowPlaying/NowPlaying';
import Request from './Request/Request';
import Queue from './Queue/Queue';

import {
  queue,
  nowPlaying,
  playlists
} from '../../data';

const initialState = {
  currentTime: 0,
  endTime: 60,
  queue,
  nowPlaying,
  playlists,
  currentPlaylist: playlists[0]
};

class JukeboxApp extends Component {
  state = initialState;

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getNewSong = () => {
    if (this.state.queue.length === 0) {
      this.setState(initialState);
    } else {
      const newState = { currentTime: 0, endTime: 60 };
      const newQueue = [...this.state.queue];
      newQueue.shift();
      newState.queue = newQueue;
      newState.nowPlaying = this.state.queue[0];
      this.setState(newState);
    }
  }

  tick = () => {
    this.setState({ currentTime: this.state.currentTime + 1 });
    if (this.state.currentTime === this.state.endTime) this.getNewSong();
  }

  timer = setInterval(this.tick, 1000);

  changePlaylist = (e) => {
    console.log(e.target.value);
    console.log(this);

    this.setState({ currentPlaylist: e.target.value });
  }

  addToQueue = (newTitle) => {
    const newItem = {
      id: Date.now(),
      title: newTitle,
      artist: 'An Artiste.',
      requestedBy: 'You Mate.',
      img: 'cactus.jpg'
    };
    this.setState({ queue: [...this.state.queue, newItem] });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main-content">
          <NowPlaying nowPlaying={this.state.nowPlaying} nextPlaying={this.state.queue[0]} />
          <Request addToQueue={this.addToQueue} />
          <Queue queue={this.state.queue} playlists={this.state.playlists} changePlaylist={this.changePlaylist} />
        </div>
        <Footer getNewSong={this.getNewSong} time={{ currentTime: this.state.currentTime, endTime: this.state.endTime }} />
      </div>
    );
  }
}

export default JukeboxApp;
