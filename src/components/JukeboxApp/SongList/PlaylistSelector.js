import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import SelectWrap from '../common/SelectWrap';

import { actions as categoriesActions } from '../../../redux/modules/jukebox/categories';

class PlaylistSelector extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    this.getCategories();
  }

  getCategories = () => {
    // TODO Refactor To Thunks
    const { categoriesRequest, categoriesSuccess, categoriesFailure } = this.props;
    categoriesRequest();
    fetch('http://localhost:3001/categories')
      .then(results => results.json())
      .then(json => categoriesSuccess(json))
      .catch(e => categoriesFailure(e));
  }

  handleChange = (e) => {
    console.log(e.target.value);
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
const mapDispatchToProps = { ...categoriesActions };
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSelector);
