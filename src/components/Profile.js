import React, { Component } from 'react';
import Adapter from './Adapter';
import { connect } from 'react-redux';

class Profile extends Component {
  state = {
    bulletins: []
  }

  componentDidMount() {
    if(this.props.currentUser) {
      Adapter.getBulletins(this.props.currentUser)
        .then( json => {
          console.log("json profile", json)
          this.setState({
            bulletins: json
          }, console.log("bulletins state", this.state.bulletins))
      })
    }
  }

  mapPosts = () => {
      return this.state.bulletins.map( bulletin => {
        return <div key={bulletin.id} bulletin={bulletin} id={bulletin.id}></div>
      })
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
