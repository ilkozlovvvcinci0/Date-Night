import React, {Component} from "react";
import "./MyMatches.css";
import {getUsername, getUserMatches, getUserImage} from "./Users.js";
import {SwipeItem} from "./SwipeItem.js";

class MyMatches extends Component {
	constructor(props) {
		super(props);
    let username = getUsername();
		this.state = {
			matchUsernames: getUserMatches(username),
		};
	}

	render() {
		let getMatches = getUserMatches(getUsername());
		let matchUsernames = [];
		let images = [];
		for (let indexOfMatchUsername in this.state.matchUsernames) {
			let matchUsername = this.state.matchUsernames[indexOfMatchUsername];
			matchUsernames.push((<div key={matchUsername}> {matchUsername} </div>));
			images.push((<SwipeItem key={matchUsername} image={getUserImage(matchUsername)} />))
		}

		return (
			<div className = "my-matches-main-con">
				<div className="my-matches-elements-con">
					<div className="match-usernames"> {matchUsernames} </div>
					<div> {images} </div>


		
				</div>
			</div>



		);
	}
}

export default MyMatches;

