import React from 'react';
import { connect } from 'react-redux';
import { FaPlus, FaCheck } from 'react-icons/lib/fa';
import { Td } from '../common/Table';
import addToQueueActions from '../../../redux/modules/jukebox/addToQueue';

const AddToQueue = ({addToQueue, added, id}) => (
  <Td className={added ? '' : 'table__td--lowlight'}>
    <button onClick={() => added || addToQueue(id)}>
      { added ? <FaCheck className="table__td__icon" /> : <FaPlus className="table__td__icon" />}
      <span className="text-underline">{added ? 'Added' : 'Add To Queue'}</span></button>
  </Td>
);

export default connect(null, addToQueueActions)(AddToQueue);
