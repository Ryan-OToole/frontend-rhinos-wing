import React, { Component } from 'react';
import Adapter from './Adapter';
import { connect } from 'react-redux';
import { updateCurrentUserBulletins, updateCurrentUserBulletinsFilter } from '../actions/index';

class Profile extends Component {

  componentDidMount() {
    document.body.className = ''

    if(this.props.currentUser) {
      this.props.updateCurrentUserBulletins(Adapter.getBulletins(this.props.currentUser))
      this.props.updateCurrentUserBulletinsFilter(Adapter.getBulletins(this.props.currentUser))
    }
  }

  deleteBulletin = (bulletin) => {
    Adapter.destroyBulletin(bulletin.id)
  }

  mapPosts = () => {
    if (this.props.currentUserBulletins !== []) {
    return this.props.currentUserBulletins.map( bulletin => {
        return (
          <div className="card" key={bulletin.id}>
            <h3>{bulletin.title}</h3>
            <p>{bulletin.body.length >= 50  ? `${bulletin.body.slice(0,100)}...` : bulletin.body}</p>
            <div className="card__button">
              <button className="card__button--edit">Edit</button>
              <button onClick={ () => {this.deleteBulletin(bulletin)}} className="card__button--delete">Delete</button>
            </div>
          </div>

        );
      })
    }
  }

  render() {
    return (
      <div className="stories">
        {this.mapPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    currentUserBulletins: state.currentUserBulletins,
    currentUserBulletinsFilter: state.currentUserBulletinsFilter
  }
}

function mapDispatchToProps(dispatch) {
    return {
      updateCurrentUserBulletins: (bulletins) => {
        dispatch(updateCurrentUserBulletins(bulletins))
      },
      updateCurrentUserBulletinsFilter: (bulletins) => {
        dispatch(updateCurrentUserBulletinsFilter(bulletins))
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
