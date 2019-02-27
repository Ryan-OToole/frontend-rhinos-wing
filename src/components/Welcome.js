import React, { Component } from 'react';
import { connect } from 'react-redux';
import Adapter from './Adapter';
import { updatePostList, updatePostListFilter } from '../actions/index'

class Welcome extends Component {

  componentDidMount() {
    Adapter.getPostsAll()
      .then(posts => {
        console.log("inside animal, posts", posts)
        this.props.updatePostList(posts)
        this.props.updatePostListFilter(posts)
      })
      .then(console.log("posts loaded"))
  }

  render() {
    return (
      <div>
        Welcome to The Rhino's Wing!  The Rhino's Wing is based on symbiosis, which is the interaction of two different organisms living in close physical association, typically to the advantage of both.
        After finding myself in several situations where I felt I had something of value to provide, with one or two minor stipulations, I realized there was a need for an app that allows users
        to make a posting, search postings, and connect with others to create a symbiotic relationship (like say, the Wing to the Rhino). The app's name (The Rhino's Wing) was borne out of how
        Oxpeckers, or tick birds, sit on the rhino and eat ticks, blood sores, and even warn the rhino of danger.  This relationship is mutually advantageous to both the Rhino and Oxpecker, but for this app
        we assume Rhinos have more to offer than Oxpeckers.  For example if you own a car and need a driveway to keep it in for the year, and you want the person with the driveway to drive it to and from work
        to keep the engine in ideal working condition, the carowner (who has more to offer) would be the Rhino, and the person with a driveway to offer would be the Wing.
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
      updatePostList: (posts) => {
        dispatch(updatePostList(posts))
      },
      updatePostListFilter: (posts) => {
        dispatch(updatePostListFilter(posts))
      }
    }
  }

export default connect(null, mapDispatchToProps)(Welcome);
