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
		let matchUsernames = [];
		for (let indexOfMatchUsername in this.state.matchUsernames) {
			let matchUsername = this.state.matchUsernames[indexOfMatchUsername];
			matchUsernames.push((<div className="match-usernames" key={matchUsername}> {matchUsername} </div>));
		}

		return (
			<div className = "my-matches-main-con">
				<div className="my-matches-elements-con">
					<div> {matchUsernames} </div>
          <div className="my-match-img-container"> 
						<img src={this.state.image} className="profile-pic" alt="" />
					</div>


			


				</div>
			</div>



		);
	}
}

export default MyMatches;

