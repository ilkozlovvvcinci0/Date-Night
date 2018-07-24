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
			getImage: getUserMatchImages(),
		};
	}







	


	render() {

		return (
			<div>
				<div> {this.state.matchUsernames} </div>
			</div>



		);
	}
}

export default MyMatches;

