import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Footer from './Footer/Footer';
import NowPlaying from './NowPlaying/NowPlaying';
import RequestASong from './RequestASong/RequestASong';
import SongList from './SongList/SongList';

import { actions as playingActions } from '../../redux/modules/jukebox/playing';

class JukeboxApp extends Component {
  static propTypes = {
    getPlaying: PropTypes.func.isRequired,
    tv: PropTypes.bool
  };

  constructor(props) {
    super(props);
    props.getPlaying();
  }

  componentWillUnmount() {
    clearInterval(this.pollPlaying);
  }

  pollPlaying = setInterval(this.props.getPlaying, 1000);

  render() {
    const { tv } = this.props;
    const appClass = classNames('Jukebox', {
      'Jukebox--tv': tv
    });

    const offOnTv = tv ||
      <div>
        <RequestASong />
        <SongList />
      </div>;

    return (
      <div className={appClass}>
        <NowPlaying tv={tv} />
        {offOnTv}
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = playingActions;
export default connect(null, mapDispatchToProps)(JukeboxApp);
