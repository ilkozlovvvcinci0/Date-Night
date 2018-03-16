import React, {Component} from "react";
import "./Swipe.css"; 
import FontAwesome from "react-fontawesome"
import faStyles from "font-awesome/css/font-awesome.css";
import {getUserImage, getUsername} from "./Users.js";
import Carousel from 'nuka-carousel';

class Swipe extends Component {
  constructor(props) {
    super(props);
    let username = getUsername();
    this.state = {
      username: username,
      profilePic: `assets/img/${getUserImage(username)}`
    };
  }
  
  render() {
    return (
      <Carousel>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    
    );
  }
}

export default Swipe;
