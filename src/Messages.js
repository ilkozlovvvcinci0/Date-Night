import React, {Component} from "react";
import "./Messages.css"; 
import {withRouter} from 'react-router';
import {getUsername} from "./Users.js";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    }
  
    this.handleReceive = this.handleReceive.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  };

  handleReceive() {
    let username = getUsername();
    let userMessages = JSON.parse(localStorage.getItem("userMessages") || "[]");
    userMessages.push({
      "message": this.state.message,
      "sender": getUsername(),
      "recipient": this.props.match.params["user"],
    });
    localStorage.setItem("userMessages", JSON.stringify(userMessages));
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSend() {
    let sender = `from  ${getUsername()} :  `;
    console.log(this.props.match.params["user"]);
    let messages = JSON.parse(localStorage.getItem("messages"));
    messages.push(sender + this.state.message);
    localStorage.setItem("messages", JSON.stringify(messages));
  }

  render() {
    const {user} = this.props.match.params

    return ( 
      <div className="msg-main-con">
        <div className="msg-elements-con">
          <button className="message-btn" onClick={this.handleReceive}> messages </button>
          <div className="ta-btn">
            <textarea type="textarea" className="text-area" rows="15" cols="60" value={this.state.message}
            onChange={this.handleChange}></textarea>
            <div className="btn-send"><button className="send-2" onClick={this.handleSend}> Send </button></div>
          </div>


    

        </div>
      </div>
    );
  }
}

export default withRouter(Messages);

    








        
  

		 
			  	
   




