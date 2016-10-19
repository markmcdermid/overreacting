import React from 'react';
import QueueTable from './QueueTable';
import PlaylistSelector from './PlaylistSelector';

const Queue = ({ queue, categories, selectPlaylist }) => {
  console.log(categories);
  return (
    <div className="Queue">
      <div className="SongList__top flex flex--align-items">
        <h1 className="h1 overflow-ellipsis h--caps h--no-margin flex-grow">
          {`Queue: (${queue.length})`}
        </h1>
        <PlaylistSelector categories={categories} selectPlaylist={selectPlaylist}/>
      </div>
      <QueueTable className="SongList__table" queue={queue}/>
    </div>
  );
};

export default Queue;
