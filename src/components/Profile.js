import React, { Component } from 'react';
import Adapter from './Adapter';
import { connect } from 'react-redux';

class Profile extends Component {

  componentDidMount() {
    document.body.className = ''

    if(this.props.currentUser) {
      Adapter.getBulletins(this.props.currentUser)
        .then( json => {

        })
    }
  }

  render() {
    return (
      <div>
        {this.mapPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(Profile);
