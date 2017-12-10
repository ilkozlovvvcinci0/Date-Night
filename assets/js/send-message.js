$(document).ready(function() {
	$("#send-message").click(function() {
		localStorage.setItem('message', $("#text-area").val());
	});
});

function goMessages() {
  window.location.href = "messages.html?username=" + getUsername();
}

function getUsername() {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("username");
}



