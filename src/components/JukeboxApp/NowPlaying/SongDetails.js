import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { IoPerson, IoMicC, IoMusicNote } from 'react-icons/lib/io';


const SongDetails = (props) => {
  const { next, song, children, className } = props;
  const compClass = classNames('SongDetails flex', className, {
    'SongDetails--next': next
  });
  const imgClass = classNames({
    SongDetails__img: !next,
    'img--full-height': next
  });
  return (
    <div className={compClass} >
      { next && <h1 className="h1 h--caps">Next</h1>}
      {song.coverLg && <img className={imgClass} alt="Album Cover" src={song.coverLg} />}
      <div className="SongDetails__main">
        <div className="SongDetails__details">
          {song.title && <h2 className="h2 SongDetails__detail">
            <IoMusicNote className="SongDetails__icon" />
            <span>{song.title}</span>
          </h2>}
          { song.artist && <h2 className="h2 SongDetails__detail h--no-weight">
            <IoMicC className="SongDetails__icon" />
            <span>{song.artist}</span></h2>}
          { song.requestedBy &&
          <h3 className="h3 SongDetails__detail h--no-weight h--no-margin">
            <IoPerson className="SongDetails__icon" />
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
  }).isRequired,
  next: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string
};
export default SongDetails;
