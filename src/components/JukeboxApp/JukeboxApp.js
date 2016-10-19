import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer/Footer';
import NowPlaying from './NowPlaying/NowPlaying';
import RequestASong from './RequestASong/RequestASong';
import SongList from './SongList/SongList';

import { actions as playingActions } from '../../redux/modules/jukebox/playing';

class JukeboxApp extends Component {
  static propTypes = {
    getPlaying: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    props.getPlaying();
  }
  componentWillUnmount() {
    clearInterval(this.pollPlaying);
  }

  pollPlaying = setInterval(this.props.getPlaying, 5000);

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
const mapDispatchToProps = playingActions;
export default connect(null, mapDispatchToProps)(JukeboxApp);
