import React from 'react';
import { FaPlus, FaCheck } from 'react-icons/lib/fa';
import { Td } from '../common/Table';

const AddToQueue = ({addToQueue, added, id}) => (
  <Td className={added ? '' : 'table__td--lowlight'}>
    <button onClick={() => addToQueue(id)}>
      { added ? <FaCheck className="table__td__icon" /> : <FaPlus className="table__td__icon" />}
      <span className="text-underline">{added ? 'Added' : 'Add To Queue'}</span></button>
  </Td>
);

export default AddToQueue;
