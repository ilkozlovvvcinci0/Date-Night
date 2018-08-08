import React, {Component} from "react";
import "./Settings.css"; 
import FontAwesome from "react-fontawesome";
import {Link} from "react-router-dom";

class Settings extends Component {
  constructor(props) {
    super(props);
      this.state = {
        distanceVal: "",
        ageVal: "",
      };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let slider = {};
    slider[event.target.name] = event.target.value;
    this.setState(slider);
  }

  render() {
    return (
      <div className="settings-body">

        <div className="profile-icon-con"> 
          <FontAwesome name="user" size="3x" /> 
          <Link to="/settings" className="icon"></Link>
        </div>
          
        <div className="location-con">
          <div> Location: </div>
          <div className="location-a"> My Current Location </div>
        </div>

        <div className="distance-con">
          <div className="max-form">
            <div> Maximum Distance (km): </div>
            <form className="form">
              <input className="input" type="range" name="distanceVal" min="0" max="150"
              onChange = {this.handleChange} />
              <input className="field" type="text" value = {this.state.distanceVal} />
            </form>
          </div>
        </div>

        <div className="age-con">
          <div className="age-form">
            <div> Age Range: </div>
            <form className="form">
              <input className="input" type="range" name="ageVal" min="18" max="70"
              onChange = {this.handleChange} />
              <input className="field" type="text" value={this.state.ageVal} />
            </form>
          </div>
        </div>

        <div className="notif-con"> 
          <div> Notifications: </div>
            
          <div className="new-messages">
            <div className="text-check">
              <div className="new-matches"> New Matches </div>
              <div className="switch_box box_1">
                <input type="checkbox" className="switch_1" />
              </div>
            </div>
              
            <div className="text-check">
              <div className="set-messages"> Messages </div>
              <div className="switch_box box_1">
                <input type="checkbox" className="switch_1" />
              </div>
            </div>
          </div>

          
        
        </div>

      </div>
    );
  }
}

export default Settings;
