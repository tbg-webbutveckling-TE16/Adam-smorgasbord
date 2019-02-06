var person = ["Sid", 31, "Bertville"];

console.log(person [2]);

var person2 = [31, "Livelong", "Bert"];

console.log(person2[1]);

var person = {
    name: "Bob",
    age: 29,
    hometown: "Heresneezeduck"
};

console.log("This persons name is:" person.name);

console.log(person.age;)

person.age += 1;

console.log(person.age;)

person.hometown = "Buy a harbour";

var oddNums = {};
oddNums.int = 1;
oddNums.str = "one";
oddNums.isOdd = true;

var dog = {
    name: "BoBjork",
    breed: "Tree"
    Age: 3,
    isFriendly: false;
}

var cat = new Object();
cat.name = "XD";
cat.breed = "Nej";
cat.age = 2;
cat.isLazy = true;

var junkObject = {
    name: "Yes",
    age: 33,
    color: "Indigo",
    isEvil: true,
    friends: ["Yes", "Again"],
    pet: {
        name: "What",
        species: "Alligator",
        age: 5,
    }
}

console.log(junkObject.pet.species);
console.log(junkObject.friends[2]);
console.log(junkObject.isEvil);

var posts = [
    {
        title: "Kittens",
        author: "Krish",
        comments: ["What in Heck", "Ya"]
    },
    {
        title: "Doggen",
        author: "Danjo",
        comments: ["Bork", "Bark"]
    }
];

console.log(posts[1].comments[0]);

for(var i = 0; i < posts.length; i++){
    console.log(posts[i].title,posts[i].author, posts[i].comments,);
}