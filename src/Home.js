import React, {Component} from "react";
import "./Home.css";
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="btn-con">
          <button className="sign-up"> 
            <li><Link to="/sign-up"> Sign Up </Link></li>
          </button>

          <button className="login"> 
            <li><Link to="/login"> Login </Link></li>
          </button>
        </div>
        <div className="date-night"> Date Night </div>
      </div>
    );
  }
}

export default Home;