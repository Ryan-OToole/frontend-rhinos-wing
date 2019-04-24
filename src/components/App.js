import React, { Component, Fragment } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import CreateStory from './CreateStory';
import BulletinsContainer from '../containers/BulletinsContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './Welcome';
import NavBar from './NavBar';
import Adapter from './Adapter';
import Profile from './Profile';

class App extends Component {

  render() {
    return (
      <div>
        { Adapter.isLoggedIn() ?
          <Fragment>
            <Profile />
            <BulletinsContainer />
            <NavBar />
          </Fragment>
          :
          <div></div>
        }
          <Switch>
              <Route path="/profile" component={(props) => <Profile {...props} /> }/>
              <Route path="/login" component={(props) => <LoginForm {...props} /> }/>
              <Route path="/register" component={(props) => <RegistrationForm {...props} /> }/>
              <Route path="/createStory" component={(props) => <CreateStory {...props} /> }/>
              <Route path="/bulletinsContainer" components={(props) => <BulletinsContainer {...props} /> } />
              <Route path="/" component={(props) => <Welcome {...props} /> }/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
