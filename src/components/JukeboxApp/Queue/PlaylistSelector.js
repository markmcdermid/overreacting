import React from 'react';

const PlaylistSelector = ({ playlists, selectPlaylist }) => (
  <div className="PlaylistSelector select-group">
    <select className="select--full-width" onChange={e => selectPlaylist(e.target.value)}>
      { playlists.map(p => (
        <option>{p}</option>
      ))
      }
    </select>
  </div>
);

export default PlaylistSelector;
