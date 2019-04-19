import React, { Component, Fragment } from 'react';
import '../css/App.css';
import '../css/icon-font.css';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index';


class Welcome extends Component {

  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/sessions`, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
       })
    })
    .then( r=>r.json() )
    .then( json => {
      if(json.errors) {
      alert(`${json.errors}`)
          this.setState({
              username: "",
              password: ""
            })
    }
    else {
      localStorage.setItem('token', json.token);
      this.props.updateUser(json)
      this.props.history.push("/createStory");
    }
  })
}

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
          <Fragment>
            <div>
              <div>
                <form className="welcome__login-form" onSubmit={this.handleSubmit}>
                  <input type="text" name="username" className="welcome__login-form--username" placeholder="Phone, email, or username" onChange={this.handleChange} value={this.state.username} />
                  <input type="text" name="password" className="welcome__login-form--password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                  <input type="submit" name="submit" className="welcome__login-form--button" value="Log in" />
                </form>
              </div>
            </div>
          </Fragment>
          <div className="welcome__right-side">
            <img src="https://cdn.dribbble.com/users/64184/screenshots/3003556/plt_mf_soaring_rhino.jpg" alt="logo" className="welcome__right-side--logo" />
            <div className="welcome__right-side--greeting1">See what's happening in your neighborhood right now</div>
            <div className="welcome__right-side--greeting2">Join Rhino's Wing today.</div>
          <div className="welcome__right-side--btn">
            <input type="submit" name="submit" value="Sign Up" className="welcome__right-side--btn--signup" />
            <input type="submit" name="submit" value="Log in" className="welcome__right-side--btn--login" />
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
