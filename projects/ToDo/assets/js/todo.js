var todos = [];
var btnActivate = document.getElementById("activate")
btnActivate.addEventListener("click", function() {
  var input = prompt("What would you like to do");
  while(input !== "quit" || input !== "Quit") {
    if(input === "new") {
      var newTodo = prompt("what would you like to add");
      todos.push(newTodo);
      Console.log(newTodo + " was added to the list")
    }
    else if (input === "list"){
      todos.forEach(function(todo, 1) {
        console.log("On index" + 1 + ": "+ todo)
      });
    }
    else if(input === "delete") {
      var index = prompt("Enter index of todo to delete");
      todos.splice(index, 1);
      console.log("Which index would you like to delete?")

    }
    input = prompt("What would you like to do?")
    }
});