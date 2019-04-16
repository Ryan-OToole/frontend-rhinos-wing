import React, { Component } from 'react';
import { updatePostList, updatePostListFilter } from '../actions/index'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Adapter from '../components/Adapter';
import Animal from '../components/Animal';

class AnimalsContainer extends Component {

  componentDidMount() {
        Adapter.getPostsAll()
          .then( posts => {
              this.props.updatePostList(posts)
              this.props.updatePostListFilter(posts)
          });
        };



  render() {
    return (
      <div>
        <Animal />
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

export default withRouter(connect(null, mapDispatchToProps)(AnimalsContainer))
