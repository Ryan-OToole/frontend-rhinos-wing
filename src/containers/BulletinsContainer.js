import React, { Component } from 'react';
import { updateBulletinList, updateBulletinListFilter } from '../actions/index'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Adapter from '../components/Adapter';
import Bulletins from '../components/Bulletins';

class BulletinsContainer extends Component {

  componentDidMount() {
        Adapter.getBulletinsAll()
          .then( bulletins => {
              console.log(bulletins)
              this.props.updateBulletinList(bulletins)
              this.props.updateBulletinListFilter(bulletins)
          });
        };



  render() {
    return (
      <div className="stories">
        <Bulletins />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
    return {
      updateBulletinList: (bulletins) => {
        dispatch(updateBulletinList(bulletins))
      },
      updateBulletinListFilter: (bulletins) => {
        dispatch(updateBulletinListFilter(bulletins))
      }
    }
  }

export default withRouter(connect(null, mapDispatchToProps)(BulletinsContainer))
