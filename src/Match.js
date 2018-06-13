import React from "react";
import "./Match.css"; 
import {getUsername, getUserImage} from "./Users.js"; 
import {Link} from "react-router-dom";
import {withRouter} from 'react-router';

class Match extends React.Component {
  constructor(props) {
    super(props);
    let username = getUsername();
    this.state = {
      username: username,
      profilePic: `../assets/img/${getUserImage(username)}`
    };
  }

  render() {
    const {user} = this.props.match.params
    return (
     <div className="match-container">

      <div className="match-elements">
        <div className="match-header">
          <div className="match-msg"> Hey, it's a match! </div>
        </div>
        
        <div className="match-body">
          <div className="match-pics">
            <div className="match-pic-container"> 
              <img src={this.state.profilePic} className="profile-pic" alt="" />
            </div>
            <div className="match-pic-container"> 
              <img src={(`../assets/img/${getUserImage(user)}`)} className="profile-pic" alt="" />
            </div>
          </div>
        </div>
      
        <div className="match-footer">
          <div className="match-buttons">
            <Link to="/swipe" className="keep-swiping"> Keep Swiping </Link>
            <Link to={`/send-messages/${user}`} className="send-message"> Send Message </Link>
          </div>
        </div>
      </div>
    
    </div>
  
    )
  }
}

export default withRouter(Match);
