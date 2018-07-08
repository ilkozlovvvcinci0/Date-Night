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
    let recipient = getUsername();
    let allMessages = JSON.parse(localStorage.getItem("messages"));
    let recipientMessages = []
    let sentMessages = []

    for (let indexOfMessage in allMessages) {
      let message = allMessages[indexOfMessage];

      // if (message["recipient"] === recipient) {
      //   recipientMessages.push(message);
      //   console.log(recipientMessages);
      // }

    let sender = message["sender"];
    console.log(sender);
      // if (message["sender"] === "Mat8") {
      //   console.log("Yo Mat!");
      // }

    }

    // return recipientMessages;
  }

  render() {
    return ( 
      <div></div>
    );
  }
}

export default withRouter(Messages);

    








        
  

		 
			  	
   




