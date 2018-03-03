export function checkUsername(username) {
  if(username.search(/[a-zA-Z]/) === -1) {
    console.log("Please fill out username field! Needs at least 1 letter.");
    return false;
  }
  return true;
}

export function checkPassword(password) {
  if(password.length === 0 ) {
    console.log("A password is required!");
    return false;
  }

  if(password.length < 8) {
    console.log("Password needs to have at least 8 charcters!");
    return false;
  }

  if(password.search(/\d/) === -1) {
    console.log("Password needs to have a number!");
    return false;
  }

  if(password.search(/[a-zA-Z]/) === -1) {
    console.log("Password needs to have a letter!");
    return false;
  }
  return true;
}