let userDatabase = {
	"Meredith35": {image: "meredith.jpg", matches: [""], age: 62, occupation: "retired", about: "Need help finding my teeth..."},
	"Brady9": {image: "brady.jpg", matches: ["Lauren87", "Fran3"], age: 30, occupation: "Front-end Developer", about: "Hi, im a big believer in energy and being the best person you can be. Hopefully you're my type ;-)"},
	"Mat8": {image: "mat.jpg", matches: ["Kesha90"], age: 33, occupation: "Software Engineer", about: "Hi, lets see if this is as bad as people say haha"},
	"WaveyDon100": {image: "wavey.jpg", matches: ["Kesha90"], age: 27, occupation: "Personal Trainer", about: "Confident and assertive, always go for what I want. Sagittarius :-)"},
	"Lauren87": {image: "lauren.jpg", matches: ["Brady9"], age: 26, occupation: "Actress/Model", about: "I'm pretty shy so you'll probably have to make the first move haha. Lets hope you won't regret it :-) L xx"},
	"Fran3": {image: "francesca.jpg", matches: ["Mat8"], age: 24, occupation: "Graphic Designer", about: "Quirky/soft rock type. I like beards, Vans, intellect and adventure...and tacos :-)"},
	"Kesha90": {image: "kesha.jpg", matches: ["WaveyDon100"], age: 21, occupation: "Singer/Dancer", about: "Music is my passion! I'm wild and free-spirited. And will probably beat you on Fifa!! :-)"}
};

export function getUserImage(username) {
	return userDatabase[username]["image"];
}

function getUserMatches(username) {
	return userDatabase[username]["matches"];
}

function getUsername() {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("username");
}

function getUserAge(username) {
	return userDatabase[username]["age"];
}

function getUserOccupation(username) {
	return userDatabase[username]["occupation"];
}

//function getUserDistance(username) {
	//return userDatabase[username]["distance"];
//}

//distance depends on different peoples location

function getUserAboutMe(username) {
	return userDatabase[username]["about"];
}