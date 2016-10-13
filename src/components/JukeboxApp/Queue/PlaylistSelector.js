import React from 'react';

export default ({ playlists, changePlaylist }) => (
  <div className="PlaylistSelector select-group">
    <select onChange={changePlaylist}>
      { playlists.map(p => (
        <option>{p}</option>
      ))
      }
    </select>
  </div>
);
