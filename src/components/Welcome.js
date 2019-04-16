
import React, { Component } from 'react';
import '../css/App.css';
import '../css/icon-font.css';
import RegistrationForm from './RegistrationForm';
import LoginBox from './LoginBox';

class Welcome extends Component {

  render() {
    return(
      <div>
        <div className="col-1-of-2">
          <div className="card__picture">
            <div className="card__picture-text-holder">
              <div className="card__picture-text">
                <i className="icon-basic-world icon"></i>
                Engage your community
              </div>
              <div className="card__picture-text">
                <i className="icon-basic-rss"></i>
                Meet new people
              </div>

              <div className="card__picture-text">
                <i className="icon-basic-lightbulb"></i>
                Simplify your life
              </div>
            </div>
          </div>
        </div>
        <div className="col-2-of-2">
          <div className="login-welcome-page">
            <LoginBox />
          </div>
          <img src="https://cdn.dribbble.com/users/64184/screenshots/3003556/plt_mf_soaring_rhino.jpg" alt="logo" className="logo-welcome" />
          <div className="welcome-greeting">See What's Happening in your neighborhood right now</div>
        </div>
      </div>
    );
  }
}

export default Welcome;
