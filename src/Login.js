import React, { Component } from 'react';
import './Login.css';
{/*import Checks from './Checks';*/}

class Login extends Component {
  constructor(props) {
  	super(props);
	    this.state = {
	    	username:"",
	    	password:"",
	    };

	  this.handleUserChange = this.handleUserChange.bind(this);
	  this.handlePassChange = this.handlePassChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleUserChange(event) {
    this.setState({username: event.target.value});
  }

  handlePassChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {

    function checkUsername(username) {
	    if(username.search(/[a-zA-Z]/) === -1) {
	      console.log("Please fill out username field! Needs at least 1 letter.");
	      return false;
	   	}
	   	return true;
		}

		function checkPassword(password) {
	   if(password.length === 0 ) {
	      console.log("A password is required!");
	      return false;
	   }
	   
	   if(password.length < 8) {
	      console.log("Password needs to have at least 8 charcters!");
	      return false;
	   }

	   if(password.search(/\d/) === -1) {
	      console.log("Password needs to have a number!");
	      return false;
	   }

	   if(password.search(/[a-zA-Z]/) === -1) {
	      console.log("Password needs to have a letter!");
	      return false;
	   }

	   return true;
	}

		checkUsername(this.state.username);
		checkPassword(this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="login"> 
      	<form className="login-form" onSubmit={this.handleSubmit}>
      		<div className="log-user-pass-con">
		        <label>
		          Username
		          <input className="log-pass-user" type="text" onChange={this.handleUserChange} /> 
		        </label>
      		</div>

      		<div className="log-user-pass-con">
      			<label>
		          Password
		          <input className="log-pass-user" type="text" onChange={this.handlePassChange} /> 
		        </label>
      		</div>

      		<div className="log-btn-con">
         		<div className="log-err-mes" id="errorMessageLogin"></div>
		        <input type="submit" value="Login" className="login-btn" />
		      </div>
		    </form>
      </div>
    );
  }
}

export default Login;

