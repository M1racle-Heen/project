function onClickMenu() {
	document.getElementById('menu-bar').classList.toggle('change');
	document.getElementById('nav').classList.toggle('change-btn');
}
function clickHome () {
            window.scroll (0, 0);
}
function clickAbout () {
            window.scroll (0, 650);
}
function clickMenu () {
            window.scroll (0, 1000);
}
function clickContact () {
            window.scroll (0, 1400);
}
function clickMen () {
            window.scroll (0, 5000);
}

function popup(){
	window.scroll (0, 0);
	var btn = document.getElementById("btn_white").innerHTML;
	
	if(btn == "Log In"){
		document.querySelector(".popup").style.display = "flex";
		$(".popup").animate({opacity: "1"},"slow");
		document.body.style.overflow = "hidden";
	}else{
		logout();
	}

	
}
function popout(){
	window.scroll (0, 0);
	document.querySelector(".popup").style.display = "none";
	$(".popup").animate({opacity: "0"},"slow");
	document.body.style.overflow = "scroll";
	document.getElementById("username").value = "";
	document.getElementById("pass").value = "";
}

function login(name){
	var name = document.getElementById("username").value;
	var pass = document.getElementById("pass").value;
	if(name=="" || pass == ""){
		alert("Check your email or password");
		popup();
	}else{
	document.querySelector(".user_profile").style.display = "inline";
	document.getElementById("user_name").innerHTML = name;
	document.getElementById("btn_white").innerHTML = "Log Out";

	popout();
	}
}

function logout(){
	document.querySelector(".user_profile").style.display = "none";
	document.getElementById("btn_white").innerHTML = "Log In";
}
