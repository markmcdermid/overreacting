import React from 'react';

import QueueTable from './QueueTable';

export default ({queue}) => {
  return (
    <section className="queue">
      <div className="inner">
        <h1>Queue ({queue.length})</h1>
        <QueueTable queue={queue} />
      </div>
    </section>
  )
}
