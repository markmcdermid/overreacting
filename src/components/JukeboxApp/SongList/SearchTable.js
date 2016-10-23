import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Table, { Td } from '../common/Table';
import AddToQueue from './AddToQueue';
import { actions as addToQueueActions } from '../../../redux/modules/jukebox/addToQueue';

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
          <Td><img className="table__img" alt="" src="" />{r.title}</Td>
          <Td>{r.artists[0].name}</Td>
          <AddToQueue addToQueue={addToQueue} id={r.id} added={false} />
        </tr>
      ))}
    </Table>
  );
};

SearchTable.propTypes = {
  addToQueue: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.element).isRequired
};

const mapStateToProps = ({ auth: { token } }) => ({ token });
export default connect(mapStateToProps, addToQueueActions)(SearchTable);
