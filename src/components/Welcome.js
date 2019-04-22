import React, { Component, Fragment } from 'react';
import '../css/App.css';
import '../css/icon-font.css';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index';
import LoginBox from './LoginBox';
import { Link } from 'react-router-dom';


class Welcome extends Component {

  render() {
    return(
      <Fragment>
        <div className="col-1-of-2">
          <div className="welcome">
            <div className="welcome__text">
              <i className="icon-basic-world welcome__icon"></i>
              Engage your community
            </div>
            <div className="welcome__text">
              <i className="icon-basic-rss welcome__icon"></i>
              Meet new people
            </div>

            <div className="welcome__text">
              <i className="icon-basic-lightbulb welcome__icon"></i>
              Simplify your life
            </div>
          </div>
        </div>

        <div className="col-2-of-2">
            <LoginBox history={this.props.history} />
          <div className="welcome__right-side">
            <img src="https://cdn.dribbble.com/users/64184/screenshots/3003556/plt_mf_soaring_rhino.jpg" alt="logo" className="welcome__right-side--logo" />
            <div className="welcome__right-side--greeting1">See what's happening in your neighborhood right now</div>
            <div className="welcome__right-side--greeting2">Join Rhino's Wing today.</div>
          <div className="welcome__right-side--btn">
            <div className="welcome__right-side--btn--signup"><Link to="/register" className="welcome__right-side--btn--signup--link" >Sign Up</Link></div>
            <div className="welcome__right-side--btn--login"><Link to="/login" className="welcome__right-side--btn--login--link">Log in</Link></div>
          </div>
          </div>
        </div>
      </Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
