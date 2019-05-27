//Clicker Counter
var button1 = document.getElementById("click-one");
  count = 0;
button1.onclick = function() {
  count += 1;
  button1.innerHTML = "Click me: " + count;
};

//NightMode
var button2 = document.getElementById("click-two");

button2.addEventListener("click", function() {
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
//Clock
function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds(); 
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("clock-five").innerText = time;
  document.getElementById("clock-five").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();
//Timer
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#click-six');
  startTimer(fiveMinutes, display);
};