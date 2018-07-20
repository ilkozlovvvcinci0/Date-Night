import React, {Component} from "react";
import "./MyMatches.css";
import {getUsername, getUserMatches} from "./Users.js";
import {Link} from "react-router-dom";

class MyMatches extends Component {
	constructor(props) {
		super(props);
    let username = getUsername();
		this.state = {
			username: username,

		};

	}












	render() {
		// username = getUsername();
		// getUserMatches(getUsername);

		return (
			<div> {this.state.username} </div>





		);
	}
}

export default MyMatches;


