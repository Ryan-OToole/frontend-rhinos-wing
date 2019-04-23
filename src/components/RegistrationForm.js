import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index';
import Adapter from './Adapter';
import '../css/App.css';


class RegistrationForm extends Component {
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
    Adapter.register(this.state.username, this.state.password)
    .then( json => {
      if (json.username === undefined) {
        alert('Username taken choose another');
      }
      else {
    fetch(`http://localhost:3000/sessions/`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
        if(json.errors) {
          alert(`${json.errors}`)
        }
        else {
          localStorage.setItem('token', json.token);
          this.props.updateUser(json)
          this.props.history.push("/");
          }
        })
      }
    })
  }

  componentWillMount() {
    document.body.className = 'background_image'
  }

  render() {
    return (
      <Fragment>
        <div className="login-body">
          <div className="login-body__login-box">
            <img alt="" src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-female-avatar-icon-png-image_702460.jpg" className="avatar" />
            <h1 className="h1">Register Here</h1>
            <form onSubmit={this.handleSubmit}>
              <p>Username:</p>
              <input type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} value={this.state.username} />
              <p>Password:</p>
              <input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} value={this.state.password} />
              <input type="submit" name="submit" value="Register" />
            </form>
          </div>
        </div>
      </Fragment>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
