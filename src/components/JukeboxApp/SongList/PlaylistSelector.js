import React, { PropTypes } from 'react';

import SelectWrap from '../common/SelectWrap';

const PlaylistSelector = ({ categories, selectPlaylist }) => (
  <SelectWrap className="PlayListSelector">
    <select onChange={e => selectPlaylist(e.target.value)}>
      { categories.map(p => (<option key={p}>{p}</option>)) }
    </select>
  </SelectWrap>
);

PlaylistSelector.propTypes = {

};
export default PlaylistSelector;
