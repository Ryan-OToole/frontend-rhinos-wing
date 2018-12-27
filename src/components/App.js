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
              <Route exact path="/" component={(props) => <RegistrationForm {...props} /> }/>
              <Route path="/login" component={(props) => <RegistrationForm {...props} /> }/>
              <Route path="/register" component={(props) => <RegistrationForm {...props} /> }/>
              <Route path="/register" component={(props) => <RegistrationForm {...props} /> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
