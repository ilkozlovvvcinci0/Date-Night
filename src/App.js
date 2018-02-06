import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="btn-con">
          <button className="sign-up"> 
            <li><a href="sign-up.html"> Sign Up </a></li>
          </button>

          <button className="login"> 
            <li><a href="login.html"> Login </a></li>
          </button>
        </div>
        <div className="date-night"> Date Night </div>
      </div>
    );
  }
}

export default App;
