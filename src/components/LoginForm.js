import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index'
import '../app.css';

class LoginForm extends Component {
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
        <header>
          <title>Please Login</title>
        </header>
        <body className="login-body">
          <div className="login-box">
            <img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-female-avatar-icon-png-image_702460.jpg" className="avatar" />
          </div>
        </body>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
