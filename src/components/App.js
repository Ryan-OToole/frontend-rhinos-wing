import React, { Component, Fragment } from 'react';
import SearchBar from '../containers/search_bar'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import NavBar from './NavBar'
import Welcome from './Welcome'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
            <Route exact path="/search" component={SearchBar} />
        </Switch>
      </div>
    );
  }
}

export default App;
