import React, { Component } from 'react';

import Footer from './Footer/Footer';
import NowPlaying from './NowPlaying/NowPlaying';
import RequestASong from './RequestASong/RequestASong';
import SongList from './SongList/SongList';

class JukeboxApp extends Component {
  state = {
    currentTime: 0,
    endTime: 60,
    queue: [],
    nowPlaying: {},
    playlists: [],
    searchResults: [],
    currentPlaylist: '',
    error: false
  };

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.pollPlaying);
  }

  getNewSong = () => {
    if (this.state.queue.length > 0) {
      const newState = { currentTime: 0, endTime: 60 };
      const newQueue = [...this.state.queue];
      newQueue.shift();
      newState.queue = newQueue;
      newState.nowPlaying = this.state.queue[0];
      this.setState(newState);
    }
  }

  getPlaying = () => {
    fetch('http://10.6.29.137:3001/playing')
      .then(results => results.json())
      .then((json) => {
        console.log(json);
        const { nowPlaying, queue } = json;
        this.setState({ error: false, nowPlaying, queue });
      })
      .catch(() => this.setState({ error: true }));
  }

  search = (searchText) => {
    var body = {
      query: searchText
    };


    body = JSON.stringify(body);
    fetch('http://10.6.29.137:3001/search', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(a => console.log(a))
      .catch(e => console.log(e));
  }

  pollPlaying = setInterval(this.getPlaying, 5000);
  tick = () => {
    this.setState({ currentTime: this.state.currentTime + 1 });
    if (this.state.currentTime === this.state.endTime) this.getNewSong();
  }

  selectPlaylist = (playlist) => {
    // TODO API Call, set state on success.
    this.setState({ currentPlaylist: playlist });
  }

  resetSearch = () => {
    this.setState({ searchResults: [], searchText: '' });
  }
  addToQueue = (i) => {

    // Ajax call
    const srs = [...this.state.searchResults];
    const sr = { ...srs[i] };
    sr.added = true;
    srs[i] = sr;
    const q = [...this.state.queue, newItem];
    this.setState({ queue: q, searchResults: srs });
  }

  responseGoogle = (response) => {
    console.log('google response');
    fetch('http://10.6.29.137:3001/auth', {
      method: 'post',
      body: JSON.stringify(response)
    })
      .then((success) => {
        console.log(success);
        this.setState({ login: true });
      })
      .catch(e => console.log(e))
  }

  render() {
    const { tv } = this.props;
    return (
      <div className={`Jukebox ${tv ? 'Jukebox--tv' : ''}`}>
          {tv
            ? <NowPlaying nowPlaying={this.state.nowPlaying} nextPlaying={this.state.queue[0]} />
            : <NowPlaying nowPlaying={this.state.nowPlaying} />
          }
          {tv || <RequestASong search={this.search} /> }
          {tv || <SongList
            searchResults={this.state.queue}
            search={this.state.searchText}
            queue={this.state.queue}
            playlists={this.state.playlists}
            selectPlaylist={this.selectPlaylist}
            addToQueue={this.addToQueue}
            resetSearch={this.resetSearch}
          /> }
        <Footer
          getNewSong={this.getNewSong}
          time={{ currentTime: this.state.currentTime, endTime: this.state.endTime }}
        />
      </div>
    );
  }
}

export default JukeboxApp;
