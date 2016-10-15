import React from 'react';
import Table, { Td } from '../common/Table';
import AddToQueue from './AddToQueue';

const SearchTable = (props) => {
  const { results, addToQueue, searchText } = props;
  return (
    <Table
      {...props}
      headings={['Song', 'Artist', '']}
      widths={[5, 4, 3]}
    >
      {results.map(r => (
        <tr data-id={r.title} key={r.title}>
          <Td><img className="table__img" alt="" src={require(`../../../img/${r.img}`)} />{r.title}</Td>
          <Td>{r.artist}</Td>
          <AddToQueue addToQueue={addToQueue} id={r.id} added={r.added}/>
        </tr>
      ))}
    </Table>
  );
};

export default SearchTable;
