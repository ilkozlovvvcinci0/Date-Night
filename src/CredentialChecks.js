import {isUserRegistered} from "./Users";

export function checkUserRegistration(username) {
  let errors = [];

  if(!isUserRegistered(username)) {
    errors.push("This is not a registered username! Please go to Sign Up from the home page");
  }

  return errors;
}


export function checkUsername(username) {
  let errors = [];

  if(username.search(/[a-zA-Z]/) === -1) {
    errors.push("Please fill out username field! Needs at least 1 letter.");
  }

  return errors;
}


export function checkUserAvailability(username) {
  let errors = [];

  if(isUserRegistered(username)) {
    errors.push("Username is already registered! Please choose another");
  }

  return errors;
}


export function checkEmail(email) {
  let errors = [];

  if( ! email.match(/\w@\w+\.\w/) ) {
    errors.push("The email appears to be invalid!");
   }
   
   return errors;
}


export function checkEmailAvailability(email) {
  let errors = [];
  let takenEmails = ["meredith@gmail.com","brady@gmail.com", "mat@hotmail.co.uk", "wdon@yahoo.com", 
  "keesh90@gmail.com", "lrn@yahoo.com", "franpers@googlemail.com"]; 
  
  if(takenEmails.indexOf(email) > 0) {
    errors.push("Email is already registered! Please choose another!");
  }
    
  return errors;
}


export function checkPassword(password) {
	let errors = [];

  if(password.length === 0 ) {
    errors.push("A password is required!");
  }

  if(password.length < 8) {
    errors.push("Password needs to have at least 8 charcters!");
  }

  if(password.search(/\d/) === -1) {
    errors.push("Password needs to have a number!");
  }

  if(password.search(/[a-zA-Z]/) === -1) {
    errors.push("Password needs to have a letter!");
  }

  return errors;
}
