import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import SelectWrap from '../common/SelectWrap';

import { actions as categoriesActions } from '../../../redux/modules/jukebox/categories';

class PlaylistSelector extends Component {
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

  handleChange = (e) => {
    this.props.setCategory(e.target.value);
  }

  isSelected = name => this.props.selectedPlaylist === name;

  render() {
    return (
      <SelectWrap className="PlayListSelector">
        <select onChange={this.handleChange}>
          {this.props.categories.map(({ _id: id, name }) =>
            <option selected={this.isSelected(name)} key={id}>{name}</option>
          )}
        </select>
      </SelectWrap>
    );
  }
}

const mapStateToProps = ({ jukebox: { categories: { items, selected } } }) => ({ categories: items, selected });
export default connect(mapStateToProps, categoriesActions)(PlaylistSelector);
