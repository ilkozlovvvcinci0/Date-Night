import React, {Component} from "react";
import "./Swipe.css"; 
import faStyles from "font-awesome/css/font-awesome.css";
import FontAwesome from "react-fontawesome"
import Carousel from "nuka-carousel";
import {getUserMatches, getUserImage, getInterestUsernames} from "./Users";
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

    let userMatches = getUserMatches();
    let currentCandidate = slideUser[currentSlide];

    if (userMatches.indexOf(currentCandidate) >= 0) {
      this.props.history.push("./match/" + currentCandidate);
    } else {
      nextSlide();
    }
  }

  render() {
    let interestUsernames = getInterestUsernames();
    let swipeItems = [];
    for (let swipeIndex in interestUsernames) {
      let interestName = interestUsernames[swipeIndex];
      swipeItems.push((<SwipeItem username={interestName} image={getUserImage(interestName)} key={interestName} />))
    }

    return (
      <div className="swipe-container">  
        <div className="swipe-body">  

          <Carousel

            wrapAround={true}
            dragging={false}
            
            renderCenterLeftControls={({ previousSlide }) => (
              <FontAwesome name="times" className="cross-icon" size="3x" onClick={previousSlide} />
            )}

            renderCenterRightControls={({ nextSlide, currentSlide }) => (
              <FontAwesome name="check" className="check-icon" size="3x" onClick={() => this.onTick(currentSlide, nextSlide)} /> 
            )}

            renderBottomCenterControls={({ }) => (
              <div> </div>
            )}

          >

          {swipeItems}

          </Carousel>
        
        </div>
      </div>
    );
  }
}

export default Swipe;
