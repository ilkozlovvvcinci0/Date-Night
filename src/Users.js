let userDatabase = {
	"Meredith35": {sex: "male", seeking: "female", image: "meredith.jpg", matches: [""], email: "meredith@gmail.com", age: 62, occupation: "retired", about: "Need help finding my teeth..."},
	"Brady9": {sex: "male", seeking: "female", image: "brady.jpg", matches: ["Lauren87", "Fran3"], email: "brady@gmail.com", age: 30, occupation: "Front-end Developer", about: "Hi, im a big believer in energy and being the best person you can be. Hopefully you're my type ;-)"},
	"Mat8": {sex: "male", seeking: "female", image: "mat.jpg", matches: ["Kesha90"], email: "mat@hotmail.co.uk", age: 33, occupation: "Software Engineer", about: "Hi, lets see if this is as bad as people say haha"},
	"WaveyDon100": {sex: "male", seeking: "female", image: "wavey.jpg", matches: ["Kesha90"], email: "wdon@yahoo.com", age: 27, occupation: "Personal Trainer", about: "Confident and assertive, always go for what I want. Sagittarius :-)"},
	"Lauren87": {sex: "female", seeking: "male", image: "lauren.jpg", matches: ["Brady9"], email: "lrn@yahoo.com", age: 26, occupation: "Actress/Model", about: "I'm pretty shy so you'll probably have to make the first move haha. Lets hope you won't regret it :-) L xx"},
	"Fran3": {sex: "female", seeking: "male", image: "francesca.jpg", matches: ["Mat8"], email: "franpers@googlemail.com", age: 24, occupation: "Graphic Designer", about: "Quirky/soft rock type. I like beards, Vans, intellect and adventure...and tacos :-)"},
	"Kesha90": {sex: "female", seeking: "male", image: "kesha.jpg", matches: ["WaveyDon100"], email: "keesh90@gmail.com", age: 21, occupation: "Singer/Dancer", about: "Music is my passion! I'm wild and free-spirited. And will probably beat you on Fifa!! :-)"}
};

export function isUserRegistered(username) {
	return username in userDatabase;
}

export function isEmailRegistered(email) {
	for (let username in userDatabase) {
		let registeredEmail = userDatabase[username]["email"]
		if (registeredEmail === email) {
			return true;
		}
	}
	return false;
}

export function getUserImage(username) {
	return userDatabase[username]["image"];
}

export function getUserMatches(username) {
	return userDatabase[username]["matches"];
}

export function getUsername() {
	return localStorage.getItem("username");
}

export function getUserAge(username) {
	return userDatabase[username]["age"];
}

export function getUserOccupation(username) {
	return userDatabase[username]["occupation"];
}

//function getUserDistance(username) {
	//return userDatabase[username]["distance"];
//}

//distance depends on different peoples location

export function getUserAboutMe(username) {
	return userDatabase[username]["about"];
}
