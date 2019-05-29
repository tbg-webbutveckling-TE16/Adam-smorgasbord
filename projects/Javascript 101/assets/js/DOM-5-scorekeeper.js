var button1 = document.querySelector(".button1");
var player1 = document.querySelector(".player1");
var score1 = 0;
var button2 = document.querySelector(".button2");
var player2 = document.querySelector(".player2");
var score2 = 0;
var Winner = 0;
var input = document.getElementsByTagName("input")[0]
var ScoreToWin = document.getElementsByClassName("Win")[0]
var totalScore = document.getElementsByTagName("input")[0]

input.addEventListener("click", function() {
    ScoreToWin.innerHTML = input.value;
    totalScore = Number(input.value)
})
button1.addEventListener("click", function(){
    
    if(score1 < totalScore) {
        score1++;
        if(score1 === totalScore) {
            Winner = 1;
            document.querySelectorAll("h1")[1].innerHTML = "PLAYER " + Winner + " GOOD";
        }
    }

    player1.innerHTML = score1;

    

})

button2.addEventListener("click", function(){

    if(score2 < totalScore) {
        score2++;
        if(score2 === totalScore) {
            Winner = 2;
            document.querySelectorAll("h1")[1].innerHTML = "PLAYER " + Winner + " GOOD";

        }
    }
               
    player2.innerHTML = score2;
})







