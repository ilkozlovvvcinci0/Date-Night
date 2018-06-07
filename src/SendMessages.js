import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./SendMessages.css"; 


class SendMessages extends Component {
  constructor(props) {
    super(props);
  

  };

  render() {
    

  
    return (
		  <div className="sm-con">
				
				<div className="sm-main-body">
	        <div className="s-msg-con">
	          <Link to="/messages" className="messages"> Messages </Link>
	        </div>
	        <div className="ta-btn">
	          <textarea className="text-area" rows="15" cols="100"></textarea>
	          <div className="btn-send"><button className="send"> Send </button></div>
	        </div>
	      </div>

	      <div className="sm-main-footer">
	        <div className="footer-btns">
	          <Link to="/swipe" className="keep-swiping"> Keep Swiping </Link>
	          <button className="view-profile"> View Profile </button>
	        </div>
	      </div>

    	</div>
    );
  }
}

export default SendMessages;

    








        
  

		 
			  	
   




