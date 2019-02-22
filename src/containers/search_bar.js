import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePostList } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
     };
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    const postList = this.props.listOfPostsFilter.filter( post => {
      return post.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    console.log(postList)
    this.props.updatePostList(postList)
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

  function mapStateToProps(state) {
    return {
      currentUser: state.currentUser,
      listOfPosts: state.listOfPosts,
      listOfPostsFilter: state.listOfPostsFilter
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      updatePostList: (posts) => {
        dispatch(updatePostList(posts))
      }
    }
  }

export default connect(mapStateToProps)(SearchBar)
