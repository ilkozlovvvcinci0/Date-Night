import React, {Component} from "react";
import {Link} from "react-router-dom";
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
  };

  handleReceive() {
    // console.log(this.props.match.params["user"]);
    let messages = JSON.parse(localStorage.getItem("messages"));
    console.log(messages);

 

  }

  render() {
    const {user} = this.props.match.params

    return ( 
      <button onClick={this.handleReceive}>messages</button>    
      
    



    );
  }
}

export default withRouter(Messages);

    








        
  

		 
			  	
   




