import React from 'react';
import { IoPerson, IoMicC, IoMusicNote } from 'react-icons/lib/io';

export default ({ type, song, children }) => {
  return (
    <div className={`SongDetails ${type ? `SongDetails--${type}` : 'SongDetails--main'}`}>
      { type === 'next' && <h1 className="h1 h--caps">Next</h1>}
      <img alt="" src={require(`../../../img/${song.img}`)}/>
      <div className="SongDetails__main">
        <div className="SongDetails__details">
          <h2 className="h2">
            <IoMusicNote />
            <span className="inline-bottom">{song.title}</span>
          </h2>
          <h2 className="h2 h--no-weight"><IoMicC /> <span className="inline-bottom">{song.artist}</span></h2>
          <h3 className="h3 h--no-weight h--no-margin"><IoPerson /> <span className="inline-bottom">{song.requestedBy}</span></h3>
        </div>
        {children}
      </div>
    </div>
  );
};
