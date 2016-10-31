import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import SelectWrap from '../common/SelectWrap';

import { actions as categoriesActions } from '../../../redux/modules/jukebox/categories';

class CategorySelect extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    getCategories: PropTypes.func.isRequired,
    setCategory: PropTypes.func.isRequired,
    selectedPlaylist: PropTypes.string
  };

  constructor(props) {
    super(props);
    props.getCategories();
  }

  // TODO: Change to ID
  handleChange = e => this.props.setCategory(e.target.value)
  
  render() {
    return (
      <SelectWrap className="PlayListSelector">
        <select value={this.props.selectedPlaylist} onChange={this.handleChange}>
          {this.props.categories.map(({ _id: id, name }) =>
            <option key={id}>{name}</option>
          )}
        </select>
      </SelectWrap>
    );
  }
}

const mapStateToProps = ({ jukebox: { categories: { items, selected } } }) => ({ categories: items, selected });
export default connect(mapStateToProps, categoriesActions)(CategorySelect);
