import React, {Component} from "react";
import "./Login.css";
import {checkUsername, checkUserRegistration, checkPassword} from "./CredentialChecks"; 

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
    let errors = checkUserRegistration(this.state.username);
    errors = errors.concat(checkUsername(this.state.password));
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
      		<div className="log-user-con">
		        <label className="log-label">
		          Username
		          <input className="log-pass-user" type="text" value={this.state.username} 
              onChange={event => this.setState({username: event.target.value})} /> 
		        </label>
      		</div>

      		<div className="log-pass-con">
      			<label className="log-label">
		          Password
		          <input className="log-pass-user" type="password" value={this.state.password}  
              onChange={event => this.setState({password: event.target.value})} /> 
		        </label>
      		</div>

      		<div className="log-btn-con">
		        <input type="submit" value="Login" className="login-btn" />
		      </div>
		      <div className="err-con-log">
            <div className="err">{this.state.error}</div>
          </div>
		    </form>
      </div>
    );
  }

}

export default Login;
