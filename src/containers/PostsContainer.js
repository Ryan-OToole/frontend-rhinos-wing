import React, { Component } from 'react';
import { updatePostList, setCurrentPost } from '../action/index'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'




class PostsContainer extends Component {

  componentDidMount() {
    if(this.props.currentUser) {
      if(this.props.listOfPosts !== []) {
        Adapter.getPostsAll()
          .then( posts => {
            const postListUpdate = []
            for (let post of posts) {
              postListUpdate.push(post)
              this.props.updateCurrentPost(post)
            }
              this.props.updatePostList(postListUpdate)
          })
        }
      }
    }

    handlePosts = () => {
    return this.props.listOfPosts.map( post => {
      return  <Post post={post} />
      })
    }

  render() {
    return (
      <div>
        {this.handlePosts()}
      </div>
    );
  }
}

mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    listofPosts: state.listOfPosts
  }
}

mapDispatchToProps(dispatch) {
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
