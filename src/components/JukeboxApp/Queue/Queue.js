import React from 'react';

import QueueTable from './QueueTable';
import PlaylistSelector from './PlaylistSelector';

export default ({ queue, playlists, changePlaylist }) => {
  return (
    <section className="component--section queue">
      <div className="component__inner">
        <h1 className="h1 h--caps h--no-margin">Queue ({queue.length})</h1>
        <PlaylistSelector playlists={playlists} changePlaylist ={changePlaylist} />
        <QueueTable queue={queue} />
      </div>
    </section>
  )
}
