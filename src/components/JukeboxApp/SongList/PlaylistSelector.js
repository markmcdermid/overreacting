import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import SelectWrap from '../common/SelectWrap';

import { actions as categoriesActions } from '../../../redux/modules/jukebox/categories';

class PlaylistSelector extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    getCategories: PropTypes.func.isRequired,
    setCategory: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    props.getCategories();
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.props.setCategory(e.target.value);
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
export default connect(mapStateToProps, categoriesActions)(PlaylistSelector);
