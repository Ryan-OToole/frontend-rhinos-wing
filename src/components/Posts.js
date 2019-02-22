import React, { Component } from 'react';




class Post extends Component {
  render() {
    if (!this.props.post) {
      return <div>No Post Yet</div>
    }
    return (
      <div>
        <h3> { this.props.post.title } </h3>
        <div> { this.props.post.body } </div>
      </div>
    )
  }
}

export default Post;
