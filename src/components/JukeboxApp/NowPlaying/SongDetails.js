import React from 'react';
import { IoPerson, IoMicC, IoMusicNote } from 'react-icons/lib/io';


const getImgUrl = (id) => {
  return 'https://resources.wimpmusic.com/images/' + id.replace(/-/g, '/') + '/' + 320 + 'x' + 320 + '.jpg';
}

const SongDetails = ({ type, song, children }) => {
  return (
    <div className={`SongDetails flex ${type ? `SongDetails--${type}` : ''}`}>
      { type === 'next' && <h1 className="h1 h--caps">Next</h1>}
      <img alt="" src={getImgUrl('f93814ce-0d62-4d42-bcd2-9b3ee84b0815')}/>
      <div className="SongDetails__main">
        <div className="SongDetails__details">
          <h2 className="h2 SongDetails__detail">
            <IoMusicNote className="SongDetails__icon"/>
            <span>{song.title}</span>
          </h2>
          <h2 className="h2 SongDetails__detail h--no-weight"><IoMicC className="SongDetails__icon"/> <span>{song.artist}</span></h2>
          <h3 className="h3 SongDetails__detail h--no-weight h--no-margin"><IoPerson className="SongDetails__icon"/> <span>{song.requestedBy}</span></h3>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SongDetails;
