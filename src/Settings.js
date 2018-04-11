import React, {Component} from "react";
import "./Settings.css"; 

class Settings extends Component {
  render() {
    return (
      <div className="settings-body">
        
        <div className="location-con">
          <div> Location: </div>
          <div className="location-a"> My Current Location </div>
        </div>

        <div className="distance-con">
          <div className="max-form">
            <div> Maximum Distance (km): </div>
            <form className="form">
              <input className="input" type="range" name="foo" min="0" max="150" />
              <input className="field" type="text" value="" />
            </form>
          </div>
        </div>

        <div className="age-con">
          <div className="age-form">
            <div> Age Range: </div>
            <form className="form">
              <input className="input" type="range" name="foo" min="18" max="70" />
              <input className="field" type="text" value="" />
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
