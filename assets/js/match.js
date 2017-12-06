$(document).ready(onDocumentReady);
	let username = getUsername();
	let match = getMatchUsername();

function onDocumentReady() {
	let username = getUsername();
	let match = getMatchUsername();
	matchUser(username, match);
}

function matchUser(username, match) {
	document.getElementById("display-pic1").src = "../assets/img/" + getUserImage(username);
	document.getElementById("display-pic2").src = "../assets/img/" + getUserImage(match);
}

function getMatchUsername() {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("match");
}

function goSwipe() {
  window.location.href = "swipe.html?username=" + getUsername();
}

function goSm() {
  window.location.href = "send-message.html?username=" + getUsername() + "&match=" + getMatchUsername();
}