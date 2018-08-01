import React, {Component} from "react";
import "./MyMatchesImage.css"; 
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";



export class MyMatchesImage extends Component {
  render() {
    let image = "assets/img/" + this.props.image
    let username = this.props.username
    let userProfile = `/view-user-profile/${this.props.username}`
    return (
      <div className="my-matches-pic-container">
        <div className="elements-con">
          <Link to={userProfile}> <button type="button" className="i-btn"> i </button></Link>
          <div className="profile-icon"> 
            <FontAwesome name="comment" size="2x" /> 
            <Link to="/settings" className="message-icon"> </Link>
          </div> 
        </div>
        <div className="username"> {username} </div>
        <img src={image} className="profile-pic" alt="" />
      </div>
    );
  }
}