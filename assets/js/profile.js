function onWindowLoad() {
	let username = getUsername();
	document.getElementById("hiMessage").innerHTML = "Hi " + username + "!";
	displayUserPic(username);
}

window.addEventListener("load", onWindowLoad);

function displayUserPic(username) {
	document.getElementById("display-pic").src = "../assets/img/" + getUserImage(username);
}

function goEp() {
  window.location.href = `edit-profile.html?username=${getUsername()}`;
}

function goSwipe() {
	window.location.href = "swipe.html?username=" + getUsername();
}
	