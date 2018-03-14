import React, { Component } from "react";
import "./Login.css";
import ProfilePage from "./ProfilePage"; 
import {checkUsername, checkPassword} from "./CredentialChecks"; 
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
  	super(props);
	    this.state = {
	    	username: "",
	    	password: "",
        error: "",   	
	    };

	  this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit(event) {
    event.preventDefault();
    let errors = checkUsername(this.state.username);
    errors = errors.concat(checkPassword(this.state.password));
    if (errors.length > 0) {
      this.setState({error: errors[0]});
    } else {
      this.props.history.push("./profile-page");
      localStorage.setItem("username", this.state.username);
    }
  }

  render() {
    return (
      <div className="login"> 
      	<form className="login-form" onSubmit={this.handleSubmit}>
      		<div className="log-user-pass-con">
		        <label>
		          Username
		          <input className="log-pass-user" type="text" value={this.state.username} 
              onChange={event => this.setState({username: event.target.value})} /> 
		        </label>
      		</div>

      		<div className="log-user-pass-con">
      			<label>
		          Password
		          <input className="log-pass-user" type="password" value={this.state.password}  
              onChange={event => this.setState({password: event.target.value})} /> 
		        </label>
      		</div>

      		<div className="log-btn-con">
		        <input type="submit" value="Login" className="login-btn" />
		      </div>
		      <div className="err-con">
            <div className="err">{this.state.error}</div>
          </div>
		    </form>
      </div>
    );
  }

}

export default Login;
