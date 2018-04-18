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
            <select className="dropdown-day" value={this.state.value} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">28</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
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
              <option value="1957">1957</option>
              <option value="1958">1958</option>
              <option value="1959">1959</option>
              <option value="1960">1960</option>
              <option value="1961">1961</option>
              <option value="1962">1962</option>
              <option value="1963">1963</option>
              <option value="1964">1964</option>
              <option value="1965">1965</option>
              <option value="1966">1966</option>
              <option value="1967">1967</option>
              <option value="1968">1968</option>
              <option value="1969">1969</option>
              <option value="1970">1970</option>
              <option value="1971">1971</option>
              <option value="1972">1972</option>
              <option value="1973">1973</option>
              <option value="1974">1974</option>
              <option value="1975">1975</option>
              <option value="1976">1976</option>
              <option value="1977">1977</option>
              <option value="1978">1978</option>
              <option value="1979">1979</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
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
