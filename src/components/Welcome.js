import React, { Component } from 'react';
import '../css/App.css';
import '../css/icon-font.css';
import RegistrationForm from './RegistrationForm'

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
          <RegistrationForm />
        </div>
      </div>

    );
  }


}

export default Welcome;
