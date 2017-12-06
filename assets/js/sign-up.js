function onWindowLoad() {
	document.getElementById('signUp').addEventListener('submit', function(e){
		checkForm(e);
    });
}

function onLoad() {
    window.addEventListener("load", onWindowLoad, false);
}

function RemoveErrorMessageFromPage()
{
   var IDofContainer = "errorMessage";
   document.getElementById(IDofContainer).innerHTML = "";
   document.getElementById(IDofContainer).style.display = "none";
}

function InsertErrorMessageIntoPage(content)
{
   var IDofContainer = "errorMessage";
   document.getElementById(IDofContainer).style.display = "";
   document.getElementById(IDofContainer).innerHTML = content;
}

function checkForm(e) {
	
   // RemoveErrorMessageFromPage();

   if (!checkUsername(e) || !checkUsernameAvailability(e) || !checkEmail(e) || !checkEmailAvailability(e) || !checkPassword(e)) {
      e.preventDefault();
   }
}

onLoad();













