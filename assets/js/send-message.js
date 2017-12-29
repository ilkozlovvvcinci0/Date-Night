$(document).ready(function() {
	$("#send-message").click(function() {
		let sendMessagesKey = "message_for_" + getRecipient();
		let messages = JSON.parse(localStorage.getItem(sendMessagesKey));
		messages.push(`<div><div style=\"font-style: italic;\">from: ${getUsername()}</div></div>` + "&nbsp" + "-" + "&nbsp" + "&nbsp" + "&nbsp" + $("#text-area").val());
		localStorage.setItem(sendMessagesKey, JSON.stringify(messages));
	});
});

function getRecipient() {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("match");
}

function goMessages() {
  window.location.href = "messages.html?username=" + getUsername();
}




