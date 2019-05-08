var btnToggle = document.querySelector(".box2");

btnToggle.addEventListener("click", function() {
    document.getElementsByTagName("body")[0].classList.toggle("toggle");
});

var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};