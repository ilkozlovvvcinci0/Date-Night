import React, {Component} from "react";
import "./Swipe.css"; 
import {getUserAge, getUserOccupation, getUserAbout} from "./Users.js"; 
import FontAwesome from "react-fontawesome"
import faStyles from "font-awesome/css/font-awesome.css";
import Carousel from "nuka-carousel";
import {Link} from "react-router-dom";

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.handleSwipe = this.handleSwipe.bind(this);
  };

  handleSwipe(currentSlide) {
    console.log(currentSlide)
  }

  render() {
    return (
      <div className="swipe-container">  
        <div className="swipe-body">  

          <Carousel
            
            renderTopCenterControls={({ currentSlide }) => (
              this.handleSwipe(currentSlide) 
            )}

            renderCenterLeftControls={({ previousSlide }) => (
              <FontAwesome name="times" className="cross-icon" size="3x" onClick={previousSlide} />
            )}

            renderCenterRightControls={({ nextSlide }) => (
              <FontAwesome name="check" className="check-icon" size="3x" onClick={nextSlide} /> 
            )}

            renderBottomCenterControls={({ }) => (
              <div> </div>
            )}
          >

            <div className="pic-container">
              <div className="profile-pic-container">
                <div className="i-btn-con">
                  <Link to="/view-user-profile/Fran3" className="vup-link"><button type="button"
                  className="i-btn"> i </button></Link>
                </div>
                <img src="assets/img/francesca.jpg" className="profile-pic"/>
              </div>
            </div>

            <div className="pic-container">
              <div className="profile-pic-container">
                <div className="i-btn-con">
                  <Link to="/view-user-profile/Kesha90" className="vup-link"><button type="button"
                  className="i-btn"> i </button></Link>
                </div>
                <img src="assets/img/kesha.jpg" className="profile-pic"/>
              </div>
            </div>

            <div className="pic-container">
              <div className="profile-pic-container">
                <div className="i-btn-con">
                  <Link to="/view-user-profile/Lauren87" className="vup-link"><button type="button"
                  className="i-btn"> i </button></Link>
                </div>
                <img src="assets/img/lauren.jpg" className="profile-pic"/>
              </div>
            </div>

          </Carousel>
        
        </div>
      </div>
    );
  }
}

export default Swipe;
