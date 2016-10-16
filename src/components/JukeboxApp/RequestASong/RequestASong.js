import React, { Component } from 'react';
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
      this.props.search(this.state.searchText);
      this.setState({ searchText: '' });
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

export default RequestASong;
