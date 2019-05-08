var score1 = 0;
var score2 = 0;

var p1display = document.getElementById("Player1")
var p2display = document.getElementById("Player2")
var reset = document.getElementById("R")
var p1button = document.getElementById("P1")
var p2button = document.getElementById("P2")

p1button.addEventListener("click", function (){
    score1++
    p1display.innerHTML = score1
})
p2button.addEventListener("click", function (){
    score2++
    p2display.innerHTML = score2
})
reset.addEventListener("click", function (){
    score1 = 0
    p1display.innerHTML = score1
    score2 = 0
    p2display.innerHTML = score2
})
if (score1 === playingto){
    Console.writeLine("Yes1")
}
if (score2 === playingto){
    Console.writeLine("Yes2")
}

