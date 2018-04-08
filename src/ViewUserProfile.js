import React from "react";
import "./ViewUserProfile.css"; 
import {getUserAge, getUserOccupation, getUserAboutMe, getUserImage} from "./Users.js"; 
import {withRouter} from 'react-router';

class ViewUserProfile extends React.Component {
  render() {
    const {user} = this.props.match.params
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
          <div className="about-me"> {getUserAboutMe(user)} </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewUserProfile);
