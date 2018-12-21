import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'

class App extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <RegistrationForm /> 
        <SearchBar />
      </div>
    );
  }
}

export default App;
