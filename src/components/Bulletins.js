import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bulletin from './Bulletin';

class Bulletins extends Component {

  mapPosts = () => {
      return this.props.listOfBulletins.map( bulletin => {
        return <Bulletin key={bulletin.id} bulletin={bulletin} id={bulletin.id} />
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
      listOfBulletins: state.listOfBulletins,
      listOfBulletinsFilter: state.listOfBulletinsFilter
    }
  }

export default connect(mapStateToProps)(Bulletins)
