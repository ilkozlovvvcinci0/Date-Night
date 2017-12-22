let userDatabase = {
	"Meredith35": {image: "meredith.jpg", matches: ['']},
	"Brady9": {image: "brady.jpg", matches: ['Lauren87', 'Fran3']},
	"Mat8": {image: "mat.jpg", matches: ['Kesha90']},
	"WaveyDon100": {image: "wavey.jpg", matches: ['Kesha90']},
	"Lauren87": {image: "lauren.jpg", matches: ['Brady9']},
	"Fran3": {image: "francesca.jpg", matches: ['Mat8']},
	"Kesha90": {image: "kesha.jpg", matches: ['WaveyDon100']},
};

function getUserImage(username) {
	return userDatabase[username]['image'];
}

function getUserMatches(username) {
	return userDatabase[username]['matches'];
}

function getUsername() {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("username");
}
