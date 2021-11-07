$(document).ready(function(){


    let tasks = 0,
    done = 0,
    deleted = 0;
  
    
getSTTasks();

    
// BeforeST
let tasksBeforeST = [];
    

fillArray();


function fillArray(){

// My Storage
let Storage = JSON.parse(localStorage.getItem("Tasks"));
// Check storage Bef add data, STdata = BeforeST
 if(Storage !== null ||undefined){

    Storage.forEach((tsk)=>{
        tasksBeforeST.push(tsk);
    });
// console.log(tasksBeforeST);
}

}

// Event => Add new task 

$("button").click(function(){

    let taskName = $("input").val();

    let data = {
        id: Date.now(),
        name: taskName,
        complete: false
    }

    tasksBeforeST.push(data);

    localStorage.setItem("Tasks",JSON.stringify(tasksBeforeST));
    
getSTTasks();

tasks+=1;

$(".option.done p").html(`Your Tasks : ${tasks} <br>Done : ${done} <br> Deleted : ${deleted}`)


})


// Event => Remove Task

// 1- select icon remove
// 2- get id from task 
// 3- loop by filter and push to storage
// 4- get data from storage to tasks

$(".option.my .data-op").on("click","i",function(){
    
$(this).parent().remove();

let idRemove = $(this).parent().attr("id");

let data = tasksBeforeST.filter((tsk,i)=>{ // filter beforeST
return tsk.id !== Number(idRemove);


})

tasksBeforeST = data

localStorage.setItem("Tasks",JSON.stringify(tasksBeforeST));

deleted++;
$(".option.done p").html(`Your Tasks : ${tasks} <br>Done : ${done} <br> Deleted : ${deleted}`)

});




// Function => Get Data + Insert into [Tasks section]
function getSTTasks(){

    let data = JSON.parse(localStorage.getItem("Tasks"));
    
    if(data !== null){


      $(".dashboard .option.my .data-op .task").remove();

        data.forEach(function(task){
            let parent = $(".dashboard .option.my .data-op");
            let taskDiv = $("<div></div>").attr("id",task.id).addClass("task");
            let taskName = $("<h2></h2>").text(`- ${task.name}`);
            let icon = $("<i></i>").addClass("far fa-trash-alt");
            taskDiv.append(taskName);
            taskName.after(icon);
            parent.append(taskDiv);
             });
    }
    
    }

});








