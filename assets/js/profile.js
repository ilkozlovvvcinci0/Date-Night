function onWindowLoad() {
	let username = getUsername();
	document.getElementById("hiMessage").innerHTML = "Hi " + username + "!";
	displayUserPic(username);
}

window.addEventListener("load", onWindowLoad);

function displayUserPic(username) {
	document.getElementById("display-pic").src = "../assets/img/" + getUserImage(username);
}

function goSwipe() {
	window.location.href = "swipe.html?username=" + getUsername();
}

// function displayUserPic(username) {
//	let takenUsername = ["Meredith35","Brady9", "Mat8", "WaveyDon100",];
//	let userFilePath = ["../assets/img/meredith.jpg", "../assets/img/brady.jpg", "../assets/img/mat.jpg", "../assets/img/wavey.jpg"]
//	if (username == "Meredith35") {
//	 	document.getElementById("display-pic").src = "../assets/img/" + "meredith.jpg";
//	} else if (username == "Brady9") {
//	 	document.getElementById("display-pic").src = "../assets/img/" + "brady.jpg";
//	}
	

//	document.getElementById("display-pic").src = "../assets/img/" + username + ".jpg";






