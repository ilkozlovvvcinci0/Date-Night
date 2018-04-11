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
      profilePic: `assets/img/${getUserImage(username)}`
    };
  }
  
  render() {
    return (
      <div className="profile-main-con">
        <div className="profile-header">
          
          <div className="profile-icon"> 
            <FontAwesome name="cog" size="4x" /> 
            <Link to="/settings" className="icon"> Settings </Link>
          </div>

          <div className="profile-icon">  
            <FontAwesome name="user" size="4x" /> 
          </div>

          <div className="profile-icon">                       
            <FontAwesome name="pencil" size="4x" /> 
            <Link to="/edit-profile" className="icon"> Edit Profile </Link>
          </div>

        </div>

        <div className="profile-body">

          <div className="img-mes">
            <div> Hi {this.state.username} </div>
            <div className="profile-pic-container">
              <img src={this.state.profilePic} className="profile-pic" alt="" />
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <Link to="/swipe" className="get-swiping-btn"> Get Swiping </Link>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
