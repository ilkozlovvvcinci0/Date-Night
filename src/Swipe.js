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
    console.log({currentSlide})
  }

  render() {
    return (
      <div className="swipe-container">  
        <div className="swipe-body">  
          
          <Carousel
            
            renderTopCenterControls={({ currentSlide }) => (
              <button className="i-btn" onClick={currentSlide}> i </button>
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
                <img src="assets/img/francesca.jpg" className="profile-pic" id="display-pic" data-username="Fran3" />
              </div>
            </div>
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
          
          </Carousel>
        
        </div>
      </div>
    );
  }
}

export default Swipe;
