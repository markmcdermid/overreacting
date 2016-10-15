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
  constructor(props) {
    super(props);
  }
  state = initialState;

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.playing);
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
  getPlaying = () => {
    this.setState({ loading: true });
    // TODO Get Playing From Server (Poll / Socket) and update state.
    fetch(`https://anapioficeandfire.com/api/characters/${Math.floor(Math.random() * 600)}`)
      .then(result => result.json().then((data) => {
        this.setState({ loading: false, name: data.name });
      }))
      .catch(e => console.log(e));
  }

  tick = () => {
    this.setState({ currentTime: this.state.currentTime + 1 });
    if (this.state.currentTime === this.state.endTime) this.getNewSong();
  }
  // timer = setInterval(this.tick, 1000);

  selectPlaylist = (playlist) => {
    // TODO API Call, set state on success.
    this.setState({ currentPlaylist: playlist });
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
    console.log(this.props);
    const { tv, location: { pathname }} = this.props;
    return (
      <div className={tv && 'Jukebox--tv'}>
        <Header currentRoute={pathname} />
        <div className="main-content">
          {tv
            ? <NowPlaying nowPlaying={this.state.nowPlaying} nextPlaying={this.state.queue[0]} />
            : <NowPlaying nowPlaying={this.state.nowPlaying} />
          }
          {tv || <Request addToQueue={this.addToQueue} /> }
          {tv || <Queue queue={this.state.queue} playlists={this.state.playlists} selectPlaylist={this.selectPlaylist} /> }
        </div>
        <Footer
          getNewSong={this.getNewSong}
          time={{ currentTime: this.state.currentTime, endTime: this.state.endTime }}
        />
      </div>
    );
  }
}

export default JukeboxApp;
