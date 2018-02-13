import React, { Component } from 'react';
import Home from './Home'
import './App.css'; 
import SignUp from './Sign-Up'; 
import Login from './Login'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home}/>
          <Route exact path="/sign-up" component={SignUp}/>}
          <Route exact path="/login" component={Login}/>}
        </div>
      </Router>
    );
  }
}

export default App;