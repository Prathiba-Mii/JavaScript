let todo = [];
let running = true;


while(running) {
  let req = prompt("Please enter your request");

console.log(req);


  if(req === null || req.toLowerCase() ==="quit") {
    console.log("quitting app");
    running = false;
    break;
  }

  if(req.toLowerCase() === "list") {
    console.log("-----------");
     for(let i=0; i<todo.length; i++) {
      console.log(i,todo[i]);
    }
    console.log("------------");

    
  } else if(req === "add") {
    let task = prompt("please enter you want to add");
    todo.push(task);
    console.log("task added");
  } else if(req.toLowerCase() === "delete") {
    let idx = prompt("Please enter the task index");
    todo.splice(idx,1);
    console.log("task deleted");
  
  } else {
    console.log("Wrong request");
    
  }
  //  req = prompt("please enter your request");
}

