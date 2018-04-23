import React, {Component} from "react";
import "./Settings.css"; 

class Settings extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: ""
      };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

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
              <input className="input" type="range" min="0" max="150"
              onChange = {this.handleChange} />
              <input className="field" type="text" value = {this.state.value} />
            </form>
          </div>
        </div>

        <div className="age-con">
          <div className="age-form">
            <div> Age Range: </div>
            <form className="form">
              <input className="input" type="range" min="18" max="70"
              onChange = {this.handleChange} />
              <input className="field" type="text" value={this.state.value} />
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
