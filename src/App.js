import React, { Component } from 'react';
import Home from './Home'
import './App.css'; 
import Checks from './Checks'; 
import Login from './Login'; 
import SignUp from './SignUp'; 
import ProfilePage from './ProfilePage'; 
import {
  BrowserRouter as Router,
  Route
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
          <Route exact path="/checks" component={Checks}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/sign-up" component={SignUp}/>
          <Route exact path="/profile-page" component={ProfilePage}/>
        </div>
      </Router>
    );
  }
}

export default App;