document.getElementsByTagName("button")[0].addEventListener("click", List) //addEventListener makes the button start something amazing. An action will basically be performed

var MyToDoList = []

function List() {

        var input = 0;
     
        while(input !== "exit" || input !== "Exit") { //As long as you don't write exit the code loops.

            input = prompt("Vad vill du göra?");
            if(input === "new" || input === "New") {
                 var addNew = prompt("Write something to add to the list")
                 MyToDoList.push(addNew); // Add a new thing you need to do.
                 console.log("You added " + addNew + " to the list!")
                        }
            
            
             else if(input === "list" || input === "List") {
                for(var i = 0; i <= MyToDoList.length-1; i++) //It logs index 0 and then adds 1 to the number which will be logged next, that way it runs through them all.
                {
                    console.log(MyToDoList[i])
                }
               
             }  
             
             else if(input === "delete" || input === "Delete") {
                    var indxDel = Number(prompt("Write a number to remove from the list"))
                 
                    MyToDoList.splice(indxDel, 1) // Remove a chosen item from the list
                    console.log("you deleted index: " + indxDel)
                 }
                   
             else if(input === "exit" || input === "Exit") // If you enter exit, you exit. simple as that... break breaks the loop.
                break;
        }
        if(input === "exit" || input === "Exit") // Quit the prompt
            console.log("Closing...")
}