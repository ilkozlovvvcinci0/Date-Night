import React, {Component} from "react";
import "./MyMatches.css";
import {getUsername, getUserMatches, getUserImage} from "./Users.js";
import {MyMatchesImage} from "./MyMatchesImage.js";

class MyMatches extends Component {
	constructor(props) {
		super(props);
    let username = getUsername();
		this.state = {
			matchUsernames: getUserMatches(username),
		};
	}

	render() {
		let images = [];
		for (let indexOfMatchUsername in this.state.matchUsernames) {
			let matchUsername = this.state.matchUsernames[indexOfMatchUsername];
			images.push((<MyMatchesImage username={matchUsername} key={matchUsername}
			image={getUserImage(matchUsername)} />))
		}

		return (
			<div className = "my-matches-main-con">
				<div className="img"> {images} </div>
			</div>
		);
	}
}

export default MyMatches;