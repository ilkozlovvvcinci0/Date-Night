import React, {Component} from "react";
import "./Swipe.css"; 
import FontAwesome from "react-fontawesome"
import faStyles from "font-awesome/css/font-awesome.css";
import Carousel from 'nuka-carousel';

class Swipe extends Component {
  constructor(props) {
    super(props);
  
  };
  
  render() {
    return (
      <div className="swipe-container">  
        <div className="swipe-body">      

          <Carousel>
            <div className="profile-pic-container">
              <div className="i-btn-con">
                <button className="i-btn" id="Fran3" onclick="vup('Fran3')"> i </button>
              </div>
              <img src="assets/img/francesca.jpg" className="profile-pic" id="display-pic" data-username="Fran3" />
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
