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
    let convos = []

    for (let indexOfMessage in allMessages) {
      let message = allMessages[indexOfMessage];

      if (message["recipient"] === recipient) {
        userMessages.push(message);
      }
      
      let sender = message["sender"];
      
      if (sender === recipient) {
        userMessages.push(message);
        // console.log(userMessages);
      }

      if (sender === "Fran3" && recipient === "Mat8") {
        convos.push(message);
        console.log(convos);
      }
    }

    // return userMessages;
  }


  render() {
    return ( 
      <div> </div>
    );
  }
}

export default withRouter(Messages);

    








        
  

		 
			  	
   




