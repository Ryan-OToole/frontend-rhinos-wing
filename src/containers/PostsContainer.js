import React, { Component } from 'react';
import { updatePostList, setCurrentPost } from '../actions/index'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import Adapter from '../components/Adapter'
import Posts from '../components/Posts'

class PostsContainer extends Component {

  componentDidMount() {
        Adapter.getPostsAll()
          .then( posts => {
            console.log("post", posts)
            const postListUpdate = []
            for (let post of posts) {
              postListUpdate.push(post)
              this.props.setCurrentPost(post)
            }
              this.props.updatePostList(postListUpdate)
          })
        }

    handlePosts = () => {
      if ( this.props.listOfPosts !== undefined ) {
      return this.props.listOfPosts.map( post => {
        console.log("post inside Posts", post)
          return <Posts post={post}/>
        })
      }
    }

  render() {
    return (
      <div>
        {this.handlePosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    listofPosts: state.listOfPosts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePostList: (postsArray) => {
      dispatch(updatePostList(postsArray))
    },
    setCurrentPost: (post) => {
      dispatch(setCurrentPost(post))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer))
