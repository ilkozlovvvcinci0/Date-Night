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
    let loggedInUserMessages = []
    for (let indexOfMessage in allMessages) {
      let message = allMessages[indexOfMessage];
      let particularRecipient = this.props.match.params["user"];
      if (message["recipient"] === loggedInUser || message["sender"] === loggedInUser) {
        if (message["recipient"] === particularRecipient || message["sender"] === particularRecipient) {
          loggedInUserMessages.push(message);
          console.log(message["message"]);
          return message["message"];
        }
      }
    }
  }

  render() {
    return ( 
      <div> {this.getMessages()} </div>
    );
  }
}

export default withRouter(Messages);