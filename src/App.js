import React, {Component} from "react";
import Home from "./Home"
import "./App.css"; 
import Login from "./Login"; 
import SignUp from "./SignUp"; 
import ProfilePage from "./ProfilePage"; 
import Swipe from "./Swipe"; 
import Settings from "./Settings"; 
import EditProfile from "./EditProfile"; 
import ViewUserProfile from "./ViewUserProfile"; 
import Match from "./Match"; 
import SendMessages from "./SendMessages"; 
import Messages from "./Messages"; 
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
          <Route exact path="/sign-up" component={SignUp}/>
          <Route exact path="/profile-page" component={ProfilePage}/>
          <Route exact path="/swipe" component={Swipe}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/edit-profile" component={EditProfile}/>
          <Route path="/view-user-profile/:user" component={ViewUserProfile}/>
          <Route exact path="/match/:user" component={Match}/>
          <Route path="/send-messages/:user" component={SendMessages}/>
          <Route exact path="/messages" component={Messages}/>
        </div>
      </Router>
    );
  }
}

export default App;
