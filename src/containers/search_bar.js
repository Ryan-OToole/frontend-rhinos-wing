import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBulletinList } from '../actions/index';
import { Button } from 'react-bootstrap';
import '../css/App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
     };
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    const bulletinList = this.props.listOfBulletinsFilter.filter( bulletin => {
      return bulletin.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.props.updateBulletinList(bulletinList)
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
          placeholder="Try me fool..."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}

           />
          <span className="input-group-btn">
            <Button variant="dark" type="submit">Submit</Button>
          </span>
        </form>

      </div>

    );
  }
}

  function mapStateToProps(state) {
    return {
      currentUser: state.currentUser,
      listOfBulletins: state.listOfBulletins,
      listOfBulletinsFilter: state.listOfBulletinsFilter
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      updateBulletinList: (bulletins) => {
        dispatch(updateBulletinList(bulletins))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
