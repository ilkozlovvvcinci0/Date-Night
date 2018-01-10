$(document).ready(function() {
	let message = localStorage.getItem("message_for_" + getUsername());
  let msgList = $(".msg-list");
  let messages = JSON.parse(message);
	for (let i = 0; i < messages.length; i++) {
    msgList.append (`
      <div class="msg-parent"> 
        <div class="msg" id="msg"> ${messages[i]} </div>
      </div>`)
	}
});