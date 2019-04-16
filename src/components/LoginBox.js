import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index';
import '../css/App.css';

class LoginBox extends Component {
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
      localStorage.setItem('token', json.token);
      this.props.updateUser(json)
      this.props.history.push("/");
    })
    .catch( err => {
      console.log()
      this.setState({
        username: "",
        password: ""
      });
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <div>
            <form className="login-form-welcome" onSubmit={this.handleSubmit}>
              <input type="text" name="username" className="login-username-welcome welcome" placeholder="Phone, email, or username" onChange={this.handleChange} value={this.state.username} />
              <input type="text" name="password" className="login-password-welcome welcome" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
              <input type="submit" name="submit" className="login-button-welcome welcome" value="login"  />
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox)
