import React, {Component} from "react";
import {Link} from "react-router-dom";

export class SwipeItem extends Component {
  render() {
    // `assets/img/${this.props.image}`
    let image = "assets/img/" + this.props.image
    let userProfile = `/view-user-profile/${this.props.username}`
    return (
      <div className="pic-container">
        <div className="swipe-pic-container">
          <div className="i-btn-con">
            <Link to={userProfile} className="vup-link"><button type="button"
            className="i-btn"> i </button></Link>
          </div>
          <img src={image} className="profile-pic" alt="" />
        </div>
      </div>
    );
  }
}