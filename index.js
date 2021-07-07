function login() {
	username = document.getElementById("name").value;
	useremail = document.getElementById("email").value;

	if (username, useremail == "") {
		document.getElementById("mistake").innerHTML = "<i class='fa fa-warning'>&nbsp;</i>" + "Something wrong!";
	} else {
		localStorage.setItem("username", username);
		localStorage.setItem("useremail", useremail);
		window.location = "home_pages/home.html";
	}
}

function mail() {
	window.open("mailto:gyanam869@gmail.com?Subject=FeedBack and Suggestions");
}