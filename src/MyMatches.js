import React, {Component} from "react";
import "./MyMatches.css";
import {getUsername, getUserMatches, getUserMatchImages} from "./Users.js";
import {Link} from "react-router-dom";

class MyMatches extends Component {
	constructor(props) {
		super(props);
    let username = getUsername();
		this.state = {
			matchUsernames: getUserMatches(username),
			images: `assets/img/${getUserMatchImages()}`,
		};
	}



	render() {

		return (
			<div className = "my-matches-main-con">
				<div className="my-matches-elements-con">
					<div> {this.state.matchUsernames} </div>
					<img src={this.state.images} className="profile-pic" alt="" />

			


				</div>
			</div>



		);
	}
}

export default MyMatches;

