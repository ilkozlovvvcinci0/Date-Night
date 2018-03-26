import React, {Component} from "react";
import "./Swipe.css"; 
import FontAwesome from "react-fontawesome"
import faStyles from "font-awesome/css/font-awesome.css";
import Carousel from "nuka-carousel";

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
                  <button class="i-btn" id="Fran3" onclick="vup('Fran3')"> i </button>
                </div>
                <img src="assets/img/francesca.jpg" className="profile-pic" id="display-pic" data-username="Fran3" />
              </div>
            </div>

            <div className="pic-container">
              <div className="profile-pic-container">
                <div className="i-btn-con">
                  <button class="i-btn" id="Fran3" onclick="vup('Fran3')"> i </button>
                </div>
                <img src="assets/img/kesha.jpg" className="profile-pic" id="display-pic" data-username="Fran3" />
              </div>
            </div>

            <div className="pic-container">
              <div className="profile-pic-container">
                <div className="i-btn-con">
                  <button class="i-btn" id="Fran3" onclick="vup('Fran3')"> i </button>
                </div>
                <img src="assets/img/lauren.jpg" className="profile-pic" id="display-pic" data-username="Fran3" />
              </div>
            </div>
          
          </Carousel>
        
        </div>
      </div>
    );
  }
}

export default Swipe;
