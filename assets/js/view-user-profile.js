$(document).ready(function() {
	let vupHeader = $(".vup-header");
	let vupMainBody = $(".vup-main-body");
 	vupHeader.append (`
 	<div class="name-age-con">
  	<div class="name"> ${getProfileUser()}, </div>
  	<div class="age"> ${getUserAge(getProfileUser())} </div>
  </div>
  	<div class="occupation"> ${getUserOccupation(getProfileUser())} </div> 
  	`)

  vupMainBody.append (`
  	<div class="about-me"> ${getUserAboutMe(getProfileUser())} </div>
  	`)
});

function getProfileUser() {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("profileUser");
}

