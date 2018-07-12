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
    let convos = []

    for (let indexOfMessage in allMessages) {
      let message = allMessages[indexOfMessage];
      let particularUser = this.props.match.params["user"];
      console.log(particularUser)

      if (message["recipient"] === loggedInUser || message["sender"] === loggedInUser) {
        userMessages.push(message);
      }
    }
    console.log(userMessages);
  }


  render() {
    return ( 
      <div> </div>
    );
  }
}

export default withRouter(Messages);