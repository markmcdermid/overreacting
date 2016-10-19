import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import SelectWrap from '../common/SelectWrap';

class PlaylistSelector extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectPlaylist: PropTypes.func.isRequired
  };

  handleChange = (e) => {
    console.log(e.target);
    this.props.selectPlaylist(e.target.value);
  }

  render() {
    return (
      <SelectWrap className="PlayListSelector">
        <select onChange={this.handleChange}>
          { this.props.categories.map(p => (<option data-id={p._id} key={p._id}>{p.name}</option>)) }
        </select>
      </SelectWrap>
    );
  }
}

const mapStateToProps = ({ jukebox: { categories: { items } } }) => ({ categories: items });
export default connect(mapStateToProps)(PlaylistSelector);
