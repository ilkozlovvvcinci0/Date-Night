import React, {Component} from "react";
import "./Swipe.css"; 
import faStyles from "font-awesome/css/font-awesome.css";
import FontAwesome from "react-fontawesome"
import Carousel from "nuka-carousel";
import {Link} from "react-router-dom";
import {getUserMatches, getUsername} from "./Users";

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.onTick = this.onTick.bind(this);
  };

  onTick(currentSlide, nextSlide) {
    let slideUser = {
      0: "Fran3",
      1: "Kesha90",
      2: "Lauren87"
    }

    let userMatches = getUserMatches(getUsername());
    let currentCandidate = slideUser[currentSlide];

    if (userMatches.indexOf(currentCandidate) >= 0) {
      this.props.history.push("./match/" + currentCandidate);
    } else {
      nextSlide();
    }
  }

  render() {
    return (
      <div className="swipe-container">  
        <div className="swipe-body">  

          <Carousel

            wrapAround={true}
            
            renderCenterLeftControls={({ previousSlide }) => (
              <FontAwesome name="times" className="cross-icon" size="3x" onClick={previousSlide} />
            )}

            renderCenterRightControls={({ nextSlide, currentSlide }) => (
              <FontAwesome name="check" className="check-icon" size="3x" onClick={() => this.onTick(currentSlide, nextSlide)} /> 
            )}

          >

            <div className="pic-container">
              <div className="swipe-pic-container">
                <div className="i-btn-con">
                  <Link to="/view-user-profile/Fran3" className="vup-link"><button type="button"
                  className="i-btn"> i </button></Link>
                </div>
                <img src="assets/img/francesca.jpg" className="profile-pic" alt="" />
              </div>
            </div>

            <div className="pic-container">
              <div className="swipe-pic-container">
                <div className="i-btn-con">
                  <Link to="/view-user-profile/Kesha90" className="vup-link"><button type="button"
                  className="i-btn"> i </button></Link>
                </div>
                <img src="assets/img/kesha.jpg" className="profile-pic" alt="" />
              </div>
            </div>

            <div className="pic-container">
              <div className="swipe-pic-container">
                <div className="i-btn-con">
                  <Link to="/view-user-profile/Lauren87" className="vup-link"><button type="button"
                  className="i-btn"> i </button></Link>
                </div>
                <img src="assets/img/lauren.jpg" className="profile-pic" alt=""/>
              </div>
            </div>

          </Carousel>
        
        </div>
      </div>
    );
  }
}

export default Swipe;
