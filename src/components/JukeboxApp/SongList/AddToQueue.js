import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { FaPlus, FaCheck } from 'react-icons/lib/fa';
import { Td } from '../common/Table';

class AddToQueue extends Component {
  isInQueue = id => this.props.queue.find(q => q.id === id) !== undefined;

  render() {
    const { addToQueue, id } = this.props;
    const isInQueue = this.isInQueue(id);

    return (
      <Td className={isInQueue ? '' : 'table__td--lowlight'}>
        <button onClick={() => addToQueue(id)}>
          { isInQueue ? <FaCheck className="table__td__icon" /> : <FaPlus className="table__td__icon" />}
          <span className="text-underline">{isInQueue ? 'Added' : 'Add To Queue'}</span>
        </button>
      </Td>
    );
  }
}

AddToQueue.propTypes = {
  addToQueue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  queue: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({ jukebox: { playing: { queue } } }) => ({ queue });

export default connect(mapStateToProps)(AddToQueue);
