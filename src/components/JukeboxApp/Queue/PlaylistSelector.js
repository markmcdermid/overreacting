import React from 'react';

import SelectGroup from '../common/SelectGroup';


const PlaylistSelector = ({ playlists, selectPlaylist }) => (
  <SelectGroup className="PlayListSelector">
    <select className="select--full-width" onChange={e => selectPlaylist(e.target.value)}>
      { playlists.map(p => (
        <option key={p}>{p}</option>
      ))
      }
    </select>
  </SelectGroup>
);

export default PlaylistSelector;
