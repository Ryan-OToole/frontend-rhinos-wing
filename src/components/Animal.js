import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Adapter from './Adapter';
import { updatePostList, updatePostListFilter } from '../actions/index'
import Animalito from './Animalito'

class Animal extends Component {

  mapPosts = () => {
      return this.props.listOfPosts.map( post => {
        return <Animalito key={post.id} post={post} id={post.id} />
      })
    }

  render() {
    return (
      <div>
        {this.mapPosts()}
      </div>
    )
  }

};

  function mapStateToProps(state) {
    return {
      listOfPosts: state.listOfPosts,
      listOfPostsFilter: state.listOfPostsFilter
    }
  }

export default connect(mapStateToProps)(Animal)
