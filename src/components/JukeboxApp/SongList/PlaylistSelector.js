import React from 'react';

import SelectWrap from '../common/SelectWrap';

const PlaylistSelector = ({ playlists, selectPlaylist }) => (
  <SelectWrap className="PlayListSelector">
    <select onChange={e => selectPlaylist(e.target.value)}>
      { playlists.map(p => (<option key={p}>{p}</option>)) }
    </select>
  </SelectWrap>
);

export default PlaylistSelector;
