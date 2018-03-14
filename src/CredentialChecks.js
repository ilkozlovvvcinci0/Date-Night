export function checkUsername(username) {
  let errors = [];

  if(username.search(/[a-zA-Z]/) === -1) {
    errors.push("Please fill out username field! Needs at least 1 letter.");
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
