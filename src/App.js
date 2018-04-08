import React, {Component} from "react";
import Home from "./Home"
import "./App.css"; 
import Login from "./Login"; 
import ProfilePage from "./ProfilePage"; 
import Swipe from "./Swipe"; 
import Settings from "./Settings"; 
import EditProfile from "./EditProfile"; 
import ViewUserProfile from "./ViewUserProfile"; 
import Match from "./Match"; 
import {BrowserRouter as Router, Route} from "react-router-dom";

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
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile-page" component={ProfilePage}/>
          <Route exact path="/swipe" component={Swipe}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/edit-profile" component={EditProfile}/>
          <Route path="/view-user-profile/:user" component={ViewUserProfile}/>
          <Route path="/match/:user" component={Match}/>
        </div>
      </Router>
    );
  }
}

export default App;
