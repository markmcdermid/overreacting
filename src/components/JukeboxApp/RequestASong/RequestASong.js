import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { IoIosSearchStrong } from 'react-icons/lib/io';

import Button from '../common/Button';

class RequestASong extends Component {
  state = {
    searchText: ''
  }

  handleInputChange = e => this.setState({ searchText: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchText) {
      const route = `/play/search/${this.state.searchText}`;
      this.setState({ searchText: ''});
      this.props.push(route);
    }
  }

  render() {
    return (
      <section className="component--section request">
        <div className="component__inner">
          <h1 className="h1 h--caps">Request A Song</h1>
          <form className="form flex" onSubmit={this.handleSubmit}>
            <input
              className="form__input no-right-br"
              onChange={this.handleInputChange}
              placeholder="Search for a track..."
              value={this.state.searchText}
              type="text"
            />
            <Button className="no-left-br" text="Search" iconLeft><IoIosSearchStrong/></Button>
          </form>
        </div>
      </section>
    )
  }
}


const mapDispatchToProps = { push: routeActions.push };
export default connect(null, mapDispatchToProps)(RequestASong);
