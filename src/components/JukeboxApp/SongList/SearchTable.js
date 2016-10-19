import React from 'react';
import Table, { Td } from '../common/Table';
import AddToQueue from './AddToQueue';

const SearchTable = (props) => {
  const { results, addToQueue } = props;
  return (
    <Table
      {...props}
      headings={['Song', 'Artist', '']}
      widths={[5, 4, 3]}
    >
      {results.map(r => (
        <tr key={r.id}>
          <Td><img className="table__img" alt="" src={r.coverSm} />{r.title}</Td>
          <Td>{r.artists[0].name}</Td>
          <AddToQueue addToQueue={addToQueue} id={r.id} added={r.added}/>
        </tr>
      ))}
    </Table>
  );
};

export default SearchTable;
