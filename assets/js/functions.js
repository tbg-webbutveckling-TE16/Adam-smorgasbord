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
    if (x % 2 ==0){
    return true;
    } else{
        return false;
    }

}
console.log()

