import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer/Footer';
import NowPlaying from './NowPlaying/NowPlaying';
import RequestASong from './RequestASong/RequestASong';
import SongList from './SongList/SongList';

import { actions as playingActions } from '../../redux/modules/jukebox/playing';

const { getPlayingRequest, getPlayingSuccess, getPlayingFailure } = playingActions;


class JukeboxApp extends Component {
  constructor(props) {
    super(props);
    this.getPlaying();
  }

  componentWillUnmount() {
    // clearInterval(this.pollPlaying);
  }
  // pollPlaying = setInterval(this.getPlaying, 5000);

  getPlaying = () => {
    // TODO Refactor To Thunks
    const { getPlayingRequest, getPlayingSuccess, getPlayingFailure } = this.props;
    getPlayingRequest();
    fetch('http://localhost:3001/playing')
      .then(results => results.json())
      .then(json => getPlayingSuccess(json))
      .catch(e => getPlayingFailure(e));
  }
  render() {
    const tv = undefined;
    return (
      <div className={`Jukebox ${tv ? 'Jukebox--tv' : ''}`}>
        <NowPlaying />
        <RequestASong />
        <SongList />
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = {
  getPlayingRequest,
  getPlayingSuccess,
  getPlayingFailure
};

export default connect(null, mapDispatchToProps)(JukeboxApp);
