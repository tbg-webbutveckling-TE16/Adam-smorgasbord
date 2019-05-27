//Clicker Counter
var button = document.getElementById("click-one");
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};

//NightMode
var button = document.getElementById("click-two");

button.addEventListener("click", function() {
    document.getElementsByTagName("body")[0].classList.toggle("toggle");
});


//Lightbox
document.getElementsByClassName("click-three")[0].addEventListener("click", function() {
	document.getElementById("lightbox").className = "open";
});

document.getElementById("exit").addEventListener("click", function() {
	document.getElementById("lightbox").className = "";
});

document.getElementById("lightbox").addEventListener("click", function(e) {
	if (e.target.id == "lightbox") {
		document.getElementById("lightbox").className = "";
	}
});

//Barrelroll
var spinbtn = document.getElementById("click-four");
spinbtn.addEventListener("click", function() {
  document.getElementById("2sec").classList.toggle("rotate");
});