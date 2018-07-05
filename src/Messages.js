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
    let messages = JSON.parse(localStorage.getItem("messages"));
    return [];
  }

  render() {
    return ( 
      <div></div>
    );
  }
}

export default withRouter(Messages);

    








        
  

		 
			  	
   




