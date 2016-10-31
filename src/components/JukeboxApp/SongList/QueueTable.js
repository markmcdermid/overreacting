import React, { PropTypes } from 'react';
import Table, { Td } from '../common/Table';

const QueueTable = props => (
  <Table
    {...props}
    headings={['Song', 'Artist', 'Requested By']}
    widths={[5, 4, 3]}
  >
    {
      props.queue.map(({ id, title, coverSm, artist, requestedBy }) => (
          <tr key={id}>
            <Td><img className="table__img" alt="" src={coverSm} />{title}</Td>
            <Td>{artist}</Td>
            <Td>{requestedBy}</Td>
          </tr>
        )
      )
    }
  </Table>
);

QueueTable.propTypes = {
  queue: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    artist: PropTypes.string.isRequired,
    coverSm: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    requestedBy: PropTypes.string.isRequired,
  })).isRequired
};

export default QueueTable;
