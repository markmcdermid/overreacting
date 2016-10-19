import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer/Footer';
import NowPlaying from './NowPlaying/NowPlaying';
import RequestASong from './RequestASong/RequestASong';
import SongList from './SongList/SongList';

import { actions as jukeboxActions } from '../../redux/modules/jukebox';

const { getPlayingRequest, getPlayingSuccess, getPlayingFailure } = jukeboxActions;
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
    this.props.getPlayingRequest();
    fetch('http://localhost:3001/playing')
      .then(results => results.json())
      .then(json => this.props.getPlayingSuccess(json))
      .catch(e => this.props.getPlayingFailure(e));
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

  render() {
    const { tv, queue, nowPlaying, categories, currentCategory } = this.props;
    const nextPlaying = queue[0];
    return (
      <div className={`Jukebox ${tv ? 'Jukebox--tv' : ''}`}>
        {tv
          ? <NowPlaying nowPlaying={nowPlaying} nextPlaying={nextPlaying} />
          : <NowPlaying nowPlaying={nowPlaying} />
        }
        {tv || <RequestASong search={this.search} /> }
        {tv || <SongList
          searchResults={queue}
          queue={queue}
          categories={categories}
          currentCategory={currentCategory}
          search={this.state.searchText}
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
const mapStateToProps = ({ jukebox }) => {
  const { queue, nowPlaying, categories, currentCategory, time, isFetching } = jukebox;
  return { queue, nowPlaying, categories, currentCategory, time, isFetching };
};

export default connect(mapStateToProps, jukeboxActions)(JukeboxApp);
