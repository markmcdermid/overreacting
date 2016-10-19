import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer/Footer';
import NowPlaying from './NowPlaying/NowPlaying';
import RequestASong from './RequestASong/RequestASong';
import SongList from './SongList/SongList';

import { actions as playingActions } from '../../redux/modules/jukebox/playing';
import { actions as searchActions } from '../../redux/modules/jukebox/search';
import { actions as categoriesActions } from '../../redux/modules/jukebox/categories';

const { getPlayingRequest, getPlayingSuccess, getPlayingFailure } = playingActions;
const { searchRequest, searchSuccess, searchFailure } = searchActions;
const { categoriesRequest, categoriesSuccess, categoriesFailure } = categoriesActions;

class JukeboxApp extends Component {
  constructor(props) {
    super(props);
    this.getCategories();
    this.getPlaying();
  }

  state = {
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
  getCategories = () => {
    const { categoriesRequest, categoriesSuccess, categoriesFailure } = this.props;
    categoriesRequest();
    fetch('http://localhost:3001/categories')
      .then(results => results.json())
      .then(json => categoriesSuccess(json))
      .catch(e => categoriesFailure(e));
  }

  getPlaying = () => {
    const { getPlayingRequest, getPlayingSuccess, getPlayingFailure } = this.props;
    getPlayingRequest();
    fetch('http://localhost:3001/playing')
      .then(results => results.json())
      .then(json => getPlayingSuccess(json))
      .catch(e => getPlayingFailure(e));
  }
  search = (searchText) => {
    const { searchRequest, searchSuccess, searchFailure } = this.props;
    searchRequest(searchText);
    var opts = {
      method: 'POST',
      body: JSON.stringify({ query: searchText }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3001/search', opts)
      .then(results => results.json())
      .then(json => searchSuccess(json))
      .catch(e => {
        console.log(e);
        return searchFailure(e);
      });
  }

  pollPlaying = setInterval(this.getPlaying, 5000);

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
    // Prop Items
    const { tv, queue, nowPlaying, categories, currentCategory, time, isFetching: loadingPlaying } = this.props.playing;
    return (
      <div className={`Jukebox ${tv ? 'Jukebox--tv' : ''}`}>
        {tv
          ? <NowPlaying nowPlaying={nowPlaying} nextPlaying={queue[0]} />
          : <NowPlaying nowPlaying={nowPlaying} />
        }

        {tv || <RequestASong search={this.search} /> }
        {tv || <SongList
          searchResults={queue}
          queue={queue}
          categories={categories}
          currentCategory={currentCategory}
          search={this.search}
          addToQueue={this.addToQueue}
          selectPlaylist={this.selectPlaylist}
          resetSearch={this.resetSearch}
        /> }
        <Footer
          getNewSong={this.getNewSong}
          time={time}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ jukebox: { playing, search } }) => ({ playing, search });
const mapDispatchToProps = {
  getPlayingRequest,
  getPlayingSuccess,
  getPlayingFailure,
  searchRequest,
  searchSuccess,
  searchFailure,
  categoriesSuccess,
  categoriesRequest,
  categoriesFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(JukeboxApp);
