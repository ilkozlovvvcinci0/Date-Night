import React, {Component} from "react";
import "./MyMatches.css";
import {getUsername, getUserMatches, getUserMatchImage} from "./Users.js";
import {Link} from "react-router-dom";

class MyMatches extends Component {
	constructor(props) {
		super(props);
    let username = getUsername();
		this.state = {
			matchUsernames: getUserMatches(username),
			image: `assets/img/${getUserMatchImage()}`,
		};
	}



	render() {

		return (
			<div className = "my-matches-main-con">
				<div className="my-matches-elements-con">
					<div> {this.state.matchUsernames} </div>
          <div className="my-match-img-container"> 
						<img src={this.state.image} className="profile-pic" alt="" />
					</div>


			


				</div>
			</div>



		);
	}
}

export default MyMatches;

