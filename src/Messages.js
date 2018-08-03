import React, {Component} from "react";
import "./Messages.css"; 
import {withRouter} from 'react-router';
import {getUsername} from "./Users.js";
import {Link} from "react-router-dom";

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
    const {user} = this.props.match.params

    let senders = [];
    let threadMessage = [];
    for (let messageIndex in this.state.thread) {
      let message = this.state.thread[messageIndex];
      senders.push((<div className="individual-sender" key={messageIndex}> {message ["sender"]} </div>));
      threadMessage.push((<div className="individual-msg" key={messageIndex}> {message ["message"]} </div>));
    }

    return ( 
      <div className="msg-main-con"> 
        <div className="msg-elements-con">  
          <Link to="/my-matches" className="matches-btn"> Matches </Link>
          <Link to={`/send-messages/${user}`} className="send-message"> Send Message </Link>          <div className="msg-senders"> {senders} </div>
          <div className="msg-thread-message"> {threadMessage} </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Messages);