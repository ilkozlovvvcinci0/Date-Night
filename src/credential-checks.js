export function checkUsername(username) {
	if(username.search(/[a-zA-Z]/) === -1) {
		return "Please fill out username field! Needs at least 1 letter.";
	}
	return "";
}

export function checkPassword(password) {
	if(password.length === 0 ) {
		return "A password is required!";
	}

	if(password.length < 8) {
		return "Password needs to have at least 8 charcters!";
	}

	if(password.search(/\d/) === -1) {
		return "Password needs to have a number!";
	}

	if(password.search(/[a-zA-Z]/) === -1) {
		return "Password needs to have a letter!";
	}

	return "";
}