import React from "react";
import "./ViewUserProfile.css"; 
import {getUserAge, getUserOccupation} from "./Users.js"; 
import {withRouter} from 'react-router';

class ViewUserProfileEx extends React.Component {
  render() {
    const { user } = this.props.match.params
    return (
      <div>
        <div className="name-age-con">
          <div className="name"> {user}, </div>
          <div className="age"> {getUserAge(user)} </div>
        </div>
        <div className="occupation"> {getUserOccupation(user)} </div> 
      </div>
    );
  }
}

export default withRouter(ViewUserProfileEx);
