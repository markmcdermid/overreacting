import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer/Footer';
import NowPlaying from './NowPlaying/NowPlaying';
import RequestASong from './RequestASong/RequestASong';
import SongList from './SongList/SongList';

import {
  queue,
  nowPlaying,
  playlists
} from '../../data';

const searchResults = [...queue];
const initialState = {
  currentTime: 0,
  endTime: 60,
  queue,
  nowPlaying,
  playlists,
  searchResults,
  currentPlaylist: playlists[0]
};

class JukeboxApp extends Component {
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
  getAGameOfThronesCharacter = () => {
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
  // TODO: Re-Enable: timer = setInterval(this.tick, 1000);

  selectPlaylist = (playlist) => {
    // TODO API Call, set state on success.
    this.setState({ currentPlaylist: playlist });
  }
  search = (searchText) => {
    this.setState({ searchText });
  }
  resetSearch = () => {
    this.setState({ searchText: '' });
  }
  addToQueue = (i) => {

    const newItem = {
      id: Date.now(),
      title: this.state.queue[i].title,
      artist: 'An Artiste.',
      requestedBy: 'You Mate.',
      img: 'cactus.jpg'
    };
    const sr = [...this.state.searchResults];
    sr[i].added = true;
    const q = [...this.state.queue, newItem];
    this.setState({ queue: q, searchResults: sr });

    // TODO: This will be an api call too, set state on success
    this.setState({ queue: [...this.state.queue, newItem] });
  }

  render() {
    console.log(this.props);
    const { tv, location: { pathname } } = this.props;
    return (
      <div className={tv && 'Jukebox--tv'}>
        <Header currentRoute={pathname}/>
        <div className="main-content">
          {tv
            ? <NowPlaying nowPlaying={this.state.nowPlaying} nextPlaying={this.state.queue[0]}/>
            : <NowPlaying nowPlaying={this.state.nowPlaying}/>
          }
          {tv || <RequestASong search={this.search}/> }
          {tv || <SongList
            searchResults={this.state.searchResults}
            search={this.state.searchText}
            queue={this.state.queue}
            playlists={this.state.playlists}
            selectPlaylist={this.selectPlaylist}
            addToQueue={this.addToQueue}
            resetSearch={this.resetSearch}
          /> }
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
