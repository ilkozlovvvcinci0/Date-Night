$(document).ready(function() {
	$("#send-message").click(function() {
		let sendMessagesKey = "message_for_" + getRecipient();
		let messages = JSON.parse(localStorage.getItem(sendMessagesKey));
		messages.push(`<div class="from-user"> from: ${getUsername()} </div>` + "&nbsp" + "-"
		+ `<div class="msg-margin"> </div>` + $("#text-area").val());
		localStorage.setItem(sendMessagesKey, JSON.stringify(messages));
	});

	// $("#send-message").click(function() {
	// 	window.location.href = "messages.html?recipient=" + getRecipient();
	// });
});

function getRecipient() {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("match");
}

function goMessages() {
  window.location.href = "messages.html?recipient=" + getRecipient();
}

// function viewMsg() {
//   window.location.href = "messages.html?username=" + getRecipient();
// }

function goSwipe() {
	window.location.href = "swipe.html?username=" + getUsername();
}

function vup(profileUser) {
  window.location.href = `view-user-profile.html?profileUser=${profileUser}`
}

function getMatchUsername() {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("match");

	// view profile btn
}
	