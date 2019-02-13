import React, { Component } from 'react';
import Adapter from './Adapter';
import { DropdownButton, Dropdown, Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from "react-redux"
import { updatePostList } from '../actions/index'




class Rhinos extends Component {

  state = {
      title: '',
      body: '',
      rhino: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("id", this.props.currentUser.id)
    Adapter.postPost(this.props.currentUser.id, this.state.title, this.state.body, this.state.rhino)
      .then( post => {
        console.log(post)
        const listOfPostsUpdated = Array.from(this.props.listOfPosts)
        listOfPostsUpdated.unshift(post)
        this.props.updatePostList(listOfPostsUpdated)
      })
  }

  handleDropdownChange = (event) => {
    if (event.target.innerText === "Rhino"){
          this.setState({
          rhino: true
        })
      } else {
        this.setState({
          rhino: false
        })
      }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Type of Post:</h3>
          <select onChange={this.handleDropdownChange}>
            <option value="rhino">Rhino</option>
            <option value="wing">Wing</option>
          </select><br />
          <h3>Title:</h3><input id='note-title-input'
           name="title"
           type='text'
           size="30"
           onChange={this.handleChange}
           value={this.props.title} /><br/>
         <h3>Body:</h3><textarea
            name="body"
            rows="10"
            cols="50"
            onChange={this.handleChange}
            value={this.props.body}></textarea><br/>
          <Button type='submit' > Create Rhino's Post </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    listOfPosts: state.listOfPosts
  }
}

function mapDispatchToProps(dispatch) {
    return {
      updatePostList: (post) => {
        dispatch(updatePostList(post))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Rhinos)
