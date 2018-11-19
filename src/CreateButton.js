import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleClick = () => {
    console.log("butter beans")
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default App;
