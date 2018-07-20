import React, {Component} from "react";
import "./MyMatches.css";
import {getUsername, getUserMatches} from "./Users.js";
import {Link} from "react-router-dom";

class MyMatches extends Component {
	constructor(props) {
		super(props);
    let username = getUsername();
		this.state = {
			matchUsernames: getUserMatches(username),

		};

	}

	













	render() {

		return (
			<div> {this.state.matchUsernames} </div>





		);
	}
}

export default MyMatches;


