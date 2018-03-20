import React, {Component} from "react";
import "./Settings.css"; 
import {Link} from "react-router-dom"

class Settings extends Component {
  constructor(props) {
    super(props);
    
  };
  
  render() {
    return (
      <div className="settings-body">
        
        <div className="location-con">
          <div> Location: </div>
          <div className="location-a" id="loc"> My Current Location </div>
        </div>

        <div className="distance-con">
          <div className="max-form">
            <div> Maximum Distance (km): </div>
            <form className="form">
              <input className="input" type="range" name="foo" min="0" max="150" onchange="updateTextInput(this.value, 'textInput1')" />
              <input className="field" type="text" id="textInput1" value="" />
            </form>
          </div>
        </div>

        <div className="age-con">
          <div className="age-form">
            <div> Age Range: </div>
            <form className="form">
              <input className="input" type="range" name="foo" min="18" max="70" onchange="updateTextInput(this.value, 'textInput2')" />
              <input className="field" type="text" id="textInput2" value="" />
            </form>
          </div>
        </div>

        <div className="notif-con"> 
          <div> Notifications: </div>
            
          <div className="new-messages">
            <div className="text-check">
              <div className="new-matches"> New Matches </div>
              <div class="switch_box box_1">
                <input type="checkbox" class="switch_1" />
              </div>
            </div>
              
            <div className="text-check">
              <div className="set-messages"> Messages </div>
              <div class="switch_box box_1">
                <input type="checkbox" class="switch_1" />
              </div>
            </div>
          </div>

          
        
        </div>

      </div>
    );
  }
}

export default Settings;
