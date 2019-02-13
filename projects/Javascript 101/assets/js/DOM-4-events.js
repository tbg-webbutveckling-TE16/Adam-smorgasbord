var btn = document.querySelector("button");

btn.addEventListener("click", function() {
    setTimeout(function() {
        document.querySelector("p").innerHTML ="Wee";
    }, 500)
}
});

var lis = document.querySelectorAll("li");
lis.addEventListener("click", function() {
    lis.style.textDecoration = "line.through";
});

for(var i = 0 i =)

var btnToggle = docu,ent.querySelector("#btnToggleBg");
var isPurple = false;

btnToggle.addEventListener("click", function(){
    if(isPurple) {
        document.getElementsByTagName("body")[0].style.background = "#34495e";
    }
    else {
        document.getElementsByTagName("body")[0].style.background = "#663399e";
    }
    isPurple = !isPurple;
}