import React, {Component} from "react";
import "./Match.css"; 
import {getUserImage, getUsername} from "./Users.js";
import {Link} from "react-router-dom";

class Match extends Component {
  constructor(props) {
    super(props);
    let username = getUsername();
    this.state = {
      username: username,
      profilePic: `assets/img/${getUserImage(username)}`
    };
  }

  render() {
    return (
     <div className="match-container">
      
      <div className="match-header">
        <div className="match-msg"> Hey, it's a match! </div>
      </div>
      
      <div className="match-body">
        <div className="match-pics">
          <div className="match-pic-container"> 
            <img src = {this.state.profilePic} className="profile-pic" alt="" />
          </div>
          <div className="match-pic-container"> 
            <img src="../assets/img/no-image.jpg" className="profile-pic" alt="" />
          </div>
        </div>
      </div>
    
      <div className="match-footer">
        <div className="match-buttons">
          <Link to="/swipe" className="keep-swiping"> Keep Swiping </Link>
          <button className="send-message"> Send Message </button>
        </div>
      </div>
    
    </div>
  
    )
  }
}

export default Match;
