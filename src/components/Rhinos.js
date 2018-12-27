import React, { Component } from 'react';
import Adapter from './Adapter';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux"
import { currentUser, updateUser } from '../actions/index'


class Rhinos extends Component {

  state = {
      title: '',
      body: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log("inside Rhino current user is:", this.props.currentUser)
    event.preventDefault()
    Adapter.postPost(this.state.title, this.state.body, this.props.currentUser.id)
      .then( post => {
        const listOfPostsUpdated = Array.from(this.props.listOfPosts)
        listOfPostsUpdated.unshift(post)
        this.props.updatePostList(listOfPostsUpdated)
        console.log(this.props.listOfPosts)
      })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Title:</h3><input id='note-title-input'
           name="title"
           type='text'
           size="30"
           onChange={this.props.handleChange}
           value={this.props.title} /><br/>
         <h3>Body:</h3><textarea
            name="body"
            rows="10"
            cols="50"
            onChange={this.props.handleChange}
            value={this.props.body}></textarea><br/>
          <Button> Create Rhino's Post </Button>
        </form>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Rhinos)
