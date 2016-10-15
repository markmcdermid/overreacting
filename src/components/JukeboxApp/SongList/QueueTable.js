import React from 'react';
import Table, { Td } from '../common/Table';

const QueueTable = (props) => (
  <Table
    {...props}
    headings={['Song', 'Artist', 'Requested By']}
    widths={[5, 4, 3]}
  >
    {
      props.queue.map(q => (
        <tr key={q.id}>
          <Td><img className="table__img" alt="" src={require(`../../../img/${q.img}`)} />{q.title}</Td>
          <Td>{q.artist}</Td>
          <Td>{q.requestedBy}</Td>
        </tr>
      ))
    }
  </Table>
);

export default QueueTable;
