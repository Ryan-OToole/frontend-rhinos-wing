import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import CreateStory from './CreateStory';
import NavBar from './NavBar';
import Home from './Home';
import AnimalsContainer from '../containers/AnimalsContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
              <Route exact path="/" component={(props) => <Welcome {...props} /> }/>
              <Route path="/login" component={(props) => <LoginForm {...props} /> }/>
              <Route path="/register" component={(props) => <RegistrationForm {...props} /> }/>
              <Route path="/createStory" component={(props) => <CreateStory {...props} /> }/>
              <Route path="/animalsContainer" components={(props) => <AnimalsContainer {...props} /> } />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
