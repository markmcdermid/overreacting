import React, {Component} from 'react';

export default class extends Component {
  state = {
    request: ''
  }

  handleInputChange = e => this.setState({ request: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.request) {
      this.props.addToQueue(this.state.request);
    }
    this.setState({ request: '' });
  }

  render() {
    return (
      <section className="component--section request">
        <div className="component__inner">
          <h1 className="h1 h--caps">Request A Song</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="form__input inline-top no-right-br"
              onChange={this.handleInputChange}
              placeholder="Search for a track..."
              value={this.state.request}
              type="text"
            />
            <button className="btn inline-top no-left-br" type="submit">Search</button>
          </form>
        </div>
      </section>
    )
  }
}
