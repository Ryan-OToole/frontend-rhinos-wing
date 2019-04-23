import React, { Component } from 'react';
import Adapter from './Adapter';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { updateBulletinList, updateBulletinListFilter } from '../actions/index';
import '../css/App.css';


class CreateStory extends Component {

  state = {
      title: '',
      body: '',
      rhino: null,
      posted: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const rhino = this.state.rhino
    if (this.props.currentUser) {
      Adapter.postBulletin(this.props.currentUser.id, this.state.title, this.state.body, rhino)
        .then( bulletin => {
          const listOfBulletinsUpdated = Array.from(this.props.listOfBulletins)
          listOfBulletinsUpdated.unshift(bulletin)
          this.props.updateBulletinList(listOfBulletinsUpdated)
          this.props.updateBulletinListFilter(listOfBulletinsUpdated)
        })
        this.setState({posted: true})
    }
  }

  newPost = (event) => {
    event.preventDefault()
    this.setState({
      title: '',
      body: '',
      rhino: null,
      posted: false
    })
  }


  handleDropdownChange = (event) => {
    if (event.target.value === "rhino"){
          this.setState({
          rhino: true
        }, () => {console.log('state.rhino', this.state.rhino)})
      } else {
        this.setState({
          rhino: false
        })
      }
  }

  render() {
    return (
      <div>
      {this.state.posted === true ?
        <div>
          <button onClick={this.newPost}>Create new bulletin!</button>
          <h1>Bulletin Type: {this.state.rhino ? 'Rhino' : 'Wing'} </h1>
          <h3>Title: {this.state.title} </h3>
          <p>Body: {this.state.body} </p>
        </div>
        :
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Feeling like an animal?</h3>
          <select onChange={this.handleDropdownChange}>
            <option value='' defaultValue>Choose Type</option>
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
    }
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
      updateBulletinList: (posts) => {
        dispatch(updateBulletinList(posts))
      },
      updateBulletinListFilter: (posts) => {
        dispatch(updateBulletinListFilter(posts))
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CreateStory)
