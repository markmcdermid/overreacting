import React, {Component} from 'react';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      request: ""
    };
  }

  handleInputChange(e) {
    this.setState({ request: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.request) {
      this.props.addToQueue(this.state.request);
    }
    this.setState({ request: '' });
  }

  render() {
    return (
      <section className="request">
        <div className="inner">
          <h1>Request A Song</h1>
          <div className="input-group">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input onChange={this.handleInputChange.bind(this)}
                     placeholder="Search for a track..."
                     value={this.state.request}
                     type="text" />
              <button className="btn btn--action" type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
