import React, { Component } from 'react';
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import Stories from './Stories'
import NavBar from './NavBar'
import Welcome from './Welcome'
import AnimalsContainer from '../containers/AnimalsContainer'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
              <Route exact path="/" component={(props) => <Welcome {...props} /> }/>
              <Route path="/login" component={(props) => <LoginForm {...props} /> }/>
              <Route path="/register" component={(props) => <RegistrationForm {...props} /> }/>
              <Route path="/stories" component={(props) => <Stories {...props} /> }/>
              <Route path="/animalsContainer" components={(props) => <AnimalsContainer {...props} /> } />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
