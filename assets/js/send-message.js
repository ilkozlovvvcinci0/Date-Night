$(document).ready(function() {
	localStorage.setItem("message", "Heeyyy! I'd like to buy you some tacos...");	
	document.getElementById("text-area").innerHTML = localStorage.getItem("message");
});

function goSwipe() {
  window.location.href = "swipe.html?username=" + getUsername();
}


