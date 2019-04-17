import React, { Component, Fragment } from 'react';
import '../css/App.css';
import '../css/icon-font.css';
import RegistrationForm from './RegistrationForm';
import LoginBox from './LoginBox';

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
            <LoginBox />
          <img src="https://cdn.dribbble.com/users/64184/screenshots/3003556/plt_mf_soaring_rhino.jpg" alt="logo" className="welcome__logo" />
          <div className="welcome__greeting">See What's Happening in your neighborhood right now</div>
          <div className="welcome__greeting--2">Join Rhino's Wing</div>
        </div>
      </Fragment>
    );
  }
}

export default Welcome;
