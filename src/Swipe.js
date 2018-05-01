import React, {Component} from "react";
import "./Swipe.css"; 
import faStyles from "font-awesome/css/font-awesome.css";
import FontAwesome from "react-fontawesome"
import Carousel from "nuka-carousel";
import {getUserMatches, getUsername} from "./Users";
import {SwipeItem} from "./SwipeItem.js";

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

            <SwipeItem username="Fran3" image="francesca.jpg" />
            <SwipeItem username="Kesha90" image="kesha.jpg" />
            <SwipeItem username="Lauren87" image="lauren.jpg" />

          </Carousel>
        
        </div>
      </div>
    );
  }
}

export default Swipe;
