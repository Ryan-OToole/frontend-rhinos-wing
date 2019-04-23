import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index';
import Adapter from './Adapter';
import '../css/App.css';

class LoginBox extends Component {

  constructor(props) {
    super(props)

  this.state = {
    username: "",
    password: "",
  }
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    Adapter.login(this.state.username, this.state.password)
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
    return (
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
