import React from 'react';
import { connect } from 'react-redux';
import QueueTable from './QueueTable';
import CategorySelect from './CategorySelect';

const Queue = ({ queue, categories }) => {

  return (
    <div className="Queue">
      <div className="SongList__top flex flex--align-items">
        <h1 className="h1 overflow-ellipsis h--caps h--no-margin flex-grow">
          {`Queue: (${queue.length})`}
        </h1>
        <CategorySelect categories={categories} />
      </div>
      <QueueTable className="SongList__table" queue={queue} />
    </div>
  );
};
const mapStateToProps = ({ jukebox: { categories, playing: { queue } } }) => ({ categories, queue });
export default connect(mapStateToProps)(Queue);
