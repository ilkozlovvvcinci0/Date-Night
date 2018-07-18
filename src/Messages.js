import React, {Component} from "react";
import "./Messages.css"; 
import {withRouter} from 'react-router';
import {getUsername} from "./Users.js";

function isUserInMessage(message, user) {
  return message["recipient"] === user || message["sender"] === user;
}

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thread: this.getThread(),
    }
  };

  getThread() {
    let loggedInUser = getUsername();
    let otherUser = this.props.match.params["user"];
    let allMessages = JSON.parse(localStorage.getItem("messages"));
    let thread = []
    for (let indexOfMessage in allMessages) {
      let message = allMessages[indexOfMessage];
      if (isUserInMessage(message, loggedInUser) && isUserInMessage(message, otherUser)) {
        thread.push(message);
      }
    }
    return thread;
  }

  render() {
    let threadDivs = [];
    for (let messageIndex in this.state.thread) {
      let message = this.state.thread[messageIndex];
      threadDivs.push((<div key={messageIndex}>{message['sender']}: {message['message']}</div>));
    }

    return ( 
      <div className="msg-main-con">
        <div> {threadDivs} </div>
      </div>
    );
  }
}

export default withRouter(Messages);