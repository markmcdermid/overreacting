import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { IoPerson, IoMicC, IoMusicNote } from 'react-icons/lib/io';


const SongDetails = (props) => {
  const { type, song, children } = props;
  return (
    <div className={`SongDetails flex ${type ? `SongDetails--${type}` : ''}`}>
      { type === 'next' && <h1 className="h1 h--caps">Next</h1>}
      {song.coverLg && <img alt="" src={song.coverLg} />}
      <div className="SongDetails__main">
        <div className="SongDetails__details">
          {song.title && <h2 className="h2 SongDetails__detail">
            <IoMusicNote className="SongDetails__icon" />
            <span>{song.title}</span>
          </h2>}
          { song.artist && <h2 className="h2 SongDetails__detail h--no-weight"><IoMicC className="SongDetails__icon" />
            <span>{song.artist}</span></h2>}
          { song.requestedBy &&
          <h3 className="h3 SongDetails__detail h--no-weight h--no-margin"><IoPerson className="SongDetails__icon" />
            <span>{song.requestedBy}</span></h3>}
        </div>
        {children}
      </div>
    </div>
  );
};

SongDetails.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    requestedBy: PropTypes.string,
    coverLg: PropTypes.string
  }).isRequired
};
const mapStateToProps = ({ jukebox: { playing: song } }) => ({ song });
export default connect(mapStateToProps)(SongDetails);
