import React, {Component} from "react";
import "./Messages.css"; 
import {withRouter} from 'react-router';
import {getUsername} from "./Users.js";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.getMessages(),
    }
  };

  getMessages() {
    let loggedInUser = getUsername();
    let allMessages = JSON.parse(localStorage.getItem("messages"));
    let userMessages = []
    for (let indexOfMessage in allMessages) {
      let message = allMessages[indexOfMessage];
      let particularUser = this.props.match.params["user"];
      if (message["recipient"] === loggedInUser || message["sender"] === loggedInUser) {
        if (message["recipient"] === particularUser || message["sender"] === particularUser) {
          userMessages.push(message);
        }
      }
    }
    return userMessages;
  }


  render() {
    return ( 
      <div> </div>
    );
  }
}

export default withRouter(Messages);