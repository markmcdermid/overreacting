import React from 'react';
import Table, { Td } from '../common/Table';

const QueueTable = (props) => {
  return (
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
  )
};

export default QueueTable;
