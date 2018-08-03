import React, {Component} from "react";
import "./MyMatchesImage.css"; 
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";



export class MyMatchesImage extends Component {
  render() {
    let image = "assets/img/" + this.props.image
    let username = this.props.username
    let userProfile = `/view-user-profile/${username}`
    let sendMessage = `/send-messages/${username}`
    return (
      <div className="my-matches-pic-container">
        <div className="elements-con">
          <Link to={userProfile} className="mmi-link"> <button type="button" className="i-btn"> i </button> </Link>
          <Link to={sendMessage}> <button type="button" className="speech-bubble"> </button> </Link>
        </div>
        <div className="username"> {username} </div>
        <img src={image} className="profile-pic" alt="" />
      </div>
    );
  }
}