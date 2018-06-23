import React, {Component} from "react";
import "./Messages.css"; 
import {withRouter} from 'react-router';

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
      <div className="msg-main-con">
        <div className="msg-elements-con">
          <button className="message-btn" onClick={this.handleReceive}> messages </button>
          <div className="ta-btn">
            <textarea type="textarea" className="text-area" rows="15" cols="60" value={this.state.message}
            onChange={this.handleChange}></textarea>
            <div className="btn-send"><button className="send-2" onClick={this.handleSend}> Send </button></div>
          </div>


    

        </div>
      </div>
    );
  }
}

export default withRouter(Messages);

    








        
  

		 
			  	
   




