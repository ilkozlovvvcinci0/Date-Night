import React, {Component} from "react";
import "./ProfilePage.css"; 
import FontAwesome from "react-fontawesome"
import {getUserImage, getUsername} from "./Users.js";
import {Link} from "react-router-dom";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    let username = getUsername();
    this.state = {
      username: username,
      profilePic: `assets/img/${getUserImage(username)}`,
    };
  }
  
  render() {
    return (
      <div className="profile-main-con">
        <div className="profile-header">
          
          <div className="profile-icon"> 
            <Link to="/settings" className="icon"> <FontAwesome name="cog" size="4x" />  </Link>
          </div> 

          <div className="profile-icon"> 
            <FontAwesome name="user" size="4x" style={{ color: "#0000dd" }} /> 
          </div>


          <div className="profile-icon">                       
            <Link to="/edit-profile" className="icon"> <FontAwesome name="pencil" size="4x" />  </Link>
          </div>

        </div>

        <div className="profile-body">
          
          <div className="hi-img">
            <div className="hi-msg"> Hi {this.state.username}! </div>
            <div className="profile-pic-container">
              <img src={this.state.profilePic} className="profile-pic" alt="" />
            </div>
          </div>
        </div>
          <div className="profile-footer">
          <Link to="/my-matches" className="matches-btn"> Matches </Link>
          <Link to="/swipe" className="get-swiping-btn"> Get Swiping </Link>
        </div>
       
      </div>
    );
  }
}

export default ProfilePage;
