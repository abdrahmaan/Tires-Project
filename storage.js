let t_txt = document.querySelector('.dashboard .con .options .new input')
let b_add = document.querySelector(".dashboard .options .new button");

addElementFromStorage();

let arrayOfTasks = [];

localStorage.getItem("Tasks") ? arrayOfTasks = JSON.parse(localStorage.getItem("Tasks")) : arrayOfTasks = [] ;

b_add.onclick = function(){

    let data = {
        id: Date.now(),
        name: tasktxt.value,
        completed: false
    }

    arrayOfTasks.push(data);
    localStorage.setItem("Tasks",JSON.stringify(arrayOfTasks));
    console.log(arrayOfTasks);
    console.log(localStorage.getItem("Tasks"));

};



// function addElementFromStorage(){

// let mytasks = document.querySelector(".dashboard .options .my .data-op");

// mytasks.innerHTML ="";

// let data = JSON.parse(localStorage.getItem("Tasks"));

// data.foreach((tsk)=>{
        
        
//     //create elements
//     let taskdet = document.createElement('div'),
//     head = document.createElement('h2'),
//     icon = document.createElement("i");
    
//     // add values
//     taskdet.className = 'task';
//     head.textContent = `- ${data.name}`;
//     icon.className = "far fa-trash-alt";
    
//     // append them into others
//     taskdet.append(head);
//     head.after(icon);
//     //append task to tasks
//     mytasks.append(taskdet);
//     tasks++;
// })};



    


