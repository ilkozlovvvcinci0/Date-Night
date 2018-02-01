function onWindowLoad() {
	document.getElementById('login').addEventListener('submit', function(e) {
		checkForm(e);
  });
}

function onLoad() {
    window.addEventListener("load", onWindowLoad, false);
}

function RemoveErrorMessageFromPage()
{
   var IDofContainer = "errorMessageLogin";
   document.getElementById(IDofContainer).innerHTML = "";
   document.getElementById(IDofContainer).style.display = "none";
}

function InsertErrorMessageIntoPage(content)
{
   var IDofContainer = "errorMessageLogin";
   document.getElementById(IDofContainer).style.display = "";
   document.getElementById(IDofContainer).innerHTML = content;
}

function checkForm(e) {
  if (!checkUsername(e) || !checkPassword(e)) { 
    e.preventDefault();
  }
}



