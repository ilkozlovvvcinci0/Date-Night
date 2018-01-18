function checkUsername(e) {
   var usernameValid = document.getElementById("username").value;
   if(usernameValid.search(/[a-zA-Z]/) == -1) {
      InsertErrorMessageIntoPage("Please fill out username field! Needs at least 1 letter.");
      return false;
   }
   return true;
}

function checkUsernameAvailability(e) {
   var username = document.getElementById("username").value;
   var takenUsername = ["Meredith35","Brady9", "Mat8", "WaveyDon100", "Kesha90", "Lauren87", "Fran3"]; 
   if (takenUsername.indexOf(username) >= 0) {
      InsertErrorMessageIntoPage("This username is already in use! Please choose another!");
      return false;
   }
   return true;
}

function checkEmail(e) {
   var email = document.getElementById("email").value;
   if( ! email.match(/\w@\w+\.\w/) ) {
      InsertErrorMessageIntoPage("The email appears to be invalid!");
      return false;
   }
   return true;
}

function checkEmailAvailability(e) {
   var email = document.getElementById("email").value;
   var takenEmails = ["ab@gmail.com","mat@gmail.com", "b1@hotmail.co.uk", "jjj@yahoo.com", "ksings90@gmail.com", "locounty@yahoo.com", "franpers@googlemail.com"]; 
   if (takenEmails.indexOf(email) >= 0) {
      InsertErrorMessageIntoPage("This email is already in use! Please choose another!");
      return false;
    }
    return true;
}

function checkPassword(e) {
   var pass = document.getElementById("pass").value;
   if( pass.length == 0 ) {
      InsertErrorMessageIntoPage("A password is required!");
      return false;
   }
   
   if( pass.length < 8) {
      InsertErrorMessageIntoPage("Password needs to have at least 8 charcters!");
      return false;
   }

   if( pass.search(/\d/) == -1) {
      InsertErrorMessageIntoPage("Password needs to have a number!");
      return false;
   }

   if( pass.search(/[a-zA-Z]/) == -1) {
      InsertErrorMessageIntoPage("Password needs to have a letter!");
      return false;
   }

   return true;
}