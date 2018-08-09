import React from "react";
import "./ViewUserProfile.css"; 
import {getUserImage, getUserAge, getUserOccupation, getUserAboutMe} from "./Users.js"; 
import {withRouter} from 'react-router';

export class ViewUserProfile extends React.Component {
  render() {
    const {user} = this.props.match.params;
    return (
      <div>
        <div className="vup-header">
          <div className="name-age-con">
            <div className="name"> {user}, </div>
            <div className="age"> {getUserAge(user)} </div>
          </div>
          <div className="occupation"> {getUserOccupation(user)} </div> 
        </div>

        <div className="vup-main-body">
          <div className="vup-pic-container">
            <img src={(`../assets/img/${getUserImage(user)}`)} className="profile-pic" alt="" />
          </div>
          <div className="about-me"> {getUserAboutMe(user)} </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewUserProfile);
