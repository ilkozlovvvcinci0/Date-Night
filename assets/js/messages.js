$(document).ready(function() {
  let message = localStorage.getItem("message_for_" + getUsername());
  let body = $(".mes-main-body");
  let messages = JSON.parse(message);
  for (let i = 0; i < messages.length; i++) {
    body.append(`<div>${messages[i]}</div>`);
  }
});
