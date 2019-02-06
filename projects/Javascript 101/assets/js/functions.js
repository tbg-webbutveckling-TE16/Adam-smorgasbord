function greet(person1, person2, person3, person4) {
    console.log("Hej. " + person1 + "!");
    console.log("Hej. " + person2 + "!");
    console.log("Hej. " + person3 + "!");
    console.log("Hej. " + person4 + "!");
}

greet("Dennis", "Hej", "Adam", "Viktor");

function squared(x) {
    return x * x;
}
console.log("4 squared is: " + squared(4));

var result = squared(10);
console.log(result);

function isEven(x) {
    if (x % 2 === 0){
    return true;
    } else{
        return false;
    }

}
console.log()

function kebabToSnake(x) {
    var string = string.replace(/[a-zA-Z0-9]/g,'_');
    return string;
}
console.log(kebabToSnake)

function kebabToSnake(x) {
    var myString = str.replace(/-/g,"_");
    return myString;
}

kababToSnake("hejsan-dar-du");

function localScope() {
    var showScope = 31;
    console.log(showScope)
}

localScope();
console.log(showScope);

var showScope ="It a mejro";
console.log(showScope)

var showScopeY = 99;
function localScopeY() {
    showScopeY = 100;
    console.log(showScopeY);
}
console.log(showScopeY);
localScopeY();

function sing(); {
    console.log("Im singing in the rain")
    console.log("its funny on a sunny day!")
}

// setInterval(sing, 2500);

// var anon = setInterval(function() {
//     console.log("Anonymous heha")
// }, 3000);

function myTimer() {
    var d = new Date();
    document.getElementById("output").innerHTML = d.toLocaleTimeString();
}

myTimer();

var myTime = setInterval(myTimer, 1000);

document.getElementsByTagName("button")[0].addEventListerner("mouseenter",function(){
    clearInterval(myTime);
})

document.querySelector("button").addEventListener("mouseleave", function() {
    myTime = setInterval(myTimer, 1000);
})