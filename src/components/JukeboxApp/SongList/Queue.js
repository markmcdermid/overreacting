import React from 'react';
import QueueTable from './QueueTable';
import PlaylistSelector from './PlaylistSelector';

export default ({ queue, playlists, selectPlaylist }) => {
  return (
    <div className="Queue">
      <div className="SongList__top flex flex--align-items">
        <h1 className="h1 overflow-ellipsis h--caps h--no-margin flex-grow">
          {`Queue: (${queue.length})`}
        </h1>
        <PlaylistSelector playlists={playlists} selectPlaylist={selectPlaylist}/>
      </div>
      <QueueTable className="SongList__table" queue={queue}/>
    </div>
  );
};
