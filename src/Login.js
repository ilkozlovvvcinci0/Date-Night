import React, { Component } from 'react';
import './Login.css';
import ProfilePage from './ProfilePage'; 
import {checkUsername, checkPassword} from './CredentialChecks'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
  	super(props);
	    this.state = {
	    	username: "",
	    	password: ""    	
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
    event.preventDefault();
    if (checkUsername(this.state.username) && checkPassword(this.state.password)) {
      this.props.history.push("./profile-page");
        return true;
    }
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
         		<div className="log-err-mes"></div>
		        <input type="submit" value="Login" className="login-btn" />
		      </div>

		      <div>
		      	{this.state.errorMessage}
		      </div>
		    </form>
      </div>
    );
  }

}

export default Login;