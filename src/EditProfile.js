import React, {Component} from "react";
import "./EditProfile.css"; 
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";

class EditProfile extends Component {
  render() {
    return (
      <div className="edit-body">
       <Link to = "/profile-page" className="profile-icon-con"> 
          <FontAwesome name="user" size="3x" /> 
        </Link>
        <div className="about-con">
          <div className="title-margin"> About </div>
            <textarea className="text-area" rows="10" cols="85"></textarea>
        </div>

        <div className="work-con">
          <div className="title-margin"> Current Job </div>
          <textarea className="text-area" rows="2" cols="65"></textarea>
        </div>

        <div className="qual-con">
          <div className="title-margin"> Qualifications </div>
          <textarea className="text-area" rows="2" cols="85"></textarea>
        </div>
    </div>
    );
  }
}

export default EditProfile;
