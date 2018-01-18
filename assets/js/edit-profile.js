$(document).ready(function() {
	let aboutCon = $(".about-con");
	let workCon = $(".work-con");
	let qualCon = $(".qual-con");
 	vupHeader.append (`
 	<div class="name-age-con">
  	<div class="name"> ${getProfileUser()}, </div>
  	<div class="age"> ${getUserAge(getProfileUser())} </div>
  </div>
  	<div class="occupation"> ${getUserOccupation(getProfileUser())} </div> 
  	`)