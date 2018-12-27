import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import Rhinos from './Rhinos'
import NavBar from './NavBar'
import Welcome from './Welcome'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
              <Route exact path="/" component={(props) => <Welcome {...props} /> }/>
              <Route path="/login" component={(props) => <LoginForm {...props} /> }/>
              <Route path="/register" component={(props) => <RegistrationForm {...props} /> }/>
              <Route path="/rhinos" component={(props) => <Rhinos {...props} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
