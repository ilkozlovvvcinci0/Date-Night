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
    let userMessages = []

    for (let indexOfMessage in allMessages) {
      let message = allMessages[indexOfMessage];

      if (message["recipient"] === recipient) {
        userMessages.push(message);
      }
      
      let sender = message["sender"];
      
      if (message["sender"] === recipient) {
        userMessages.push(message);
        console.log(userMessages);
      }
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

    








        
  

		 
			  	
   




