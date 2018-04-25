import React, {Component} from "react";
import "./SignUp.css";
import {checkUsername, checkUserAvailability, checkEmail, checkEmailAvailability, checkPassword} 
from "./CredentialChecks"; 

class SignUp extends Component {
  constructor(props) {
  	super(props);
	    this.state = {
	    	username: "",
        email: "",
	    	password: "",
        error: "",   	
	    };

	  this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit(event) {
    event.preventDefault();
    let errors = checkUsername(this.state.username);
    errors = errors.concat(checkUserAvailability(this.state.username));
    errors = errors.concat(checkEmail(this.state.email));
    errors = errors.concat(checkEmailAvailability(this.state.email));
    errors = errors.concat(checkPassword(this.state.password));
    if (errors.length > 0) {
      this.setState({error: errors[0]});
    } else {
      this.props.history.push("./profile-page");
      localStorage.setItem("username", this.state.username);
    }
  }

  render() {
    let days = [];
    for (let day = 1; day <= 31; day++) {
      days.push((<option value="{day}" key={day}> {day} </option>))
    }

    
    let years = [];
    for (let year = 1957; year <= 1999; year++) {
      years.push((<option value="{year}" key={year}> {year} </option>))
    }

    return (
     <div className="sign-up-con">

      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <div className="field-con">
          <label className="label-1">
            Username 
            <input type="text" value={this.state.username} 
            onChange={event => this.setState({username: event.target.value})} 
            className="field-user-pass" /><br />
          </label>
        </div>
        
        <div className="field-con">
          <label className="label-1">
            Email <input type="text" value={this.state.email}
            onChange={event => this.setState({email: event.target.value})} 
            className="field-email" /><br />
          </label>
        </div>
        
        <div className="field-con">
          <label className="label-1">
            Password <input type="Password" name="Password" value={this.state.password}  
            onChange={event => this.setState({password: event.target.value})} 
            className="field-user-pass" /><br />
          </label>
        </div>

        <div className="field-con">
          <label className="label-2">
            Date of Birth
            <select className="dropdown-day" id="day" value={this.state.value} onChange={this.handleChange}>
              {days}
            </select>

            <select className="dropdown-month-year" value={this.state.value} onChange={this.handleChange}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select> 

            <select className="dropdown-month-year" value={this.state.value} onChange={this.handleChange}>
              {years}
            </select>
          </label>
        </div>

        <div className="field-con">
          <label className="label-2">
            I am a
            <select className="dropdown-day" value={this.state.value} onChange={this.handleChange}>
              <option value="man">man</option>
              <option value="woman">woman</option>
            </select>
          </label>

          <label className="label-2">
            seeking a
            <select className="dropdown-day" value={this.state.value} onChange={this.handleChange}>
              <option value="woman">woman</option>
              <option value="man">man</option>
            </select>
          </label>
        </div>

        <div className="sun-btn-con">
          <input type="submit" value="Sign Up Now!" className="sign-up-now" />
        </div>
         <div className="err-con">
            <div className="err">{this.state.error}</div>
         </div>










      </form>
    </div>
    );
  }

}

export default SignUp;
