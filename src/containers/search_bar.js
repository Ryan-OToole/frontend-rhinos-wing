import React, { Component } from 'react';
import '../app.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div id="searchbar">
        <div className="row" />
     <div id="left" className="col-md-6"></div>
     <div id="right" className="col-md-6"></div>

        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
          placeholder="Try some shit"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}

           />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>

      </div>

    );
  }
}


export default SearchBar;
