// import { set } from "date-fns";

// const library = [];
// function Task(title,duedate,priority,status){
//     this.title=title;
//     this.duedate=duedate;
//     this.priority=priority;
//     this.status=status;
// }
// export const createTask=(event)=>{
//     console.log("inside create");
//     event.preventDefault();
//     const title = document.getElementById("title").value;
//     const duedate = document.getElementById("duedate").value;
//     const priority = document.getElementById("priority").value;
//     const status = document.getElementById("status").value;
//     const task = new Task(title,duedate,priority,status);
//     library.push(task);
//     displayTask();
//     document.getElementById("taskform").reset();
// }
// export function showForm(){
    
//     setTimeout(() => { // ✅ Delay execution to ensure the form exists
//         const taskForm = document.getElementById("taskform");

//         if (!taskForm) {
//             console.error("❌ Task form not found in the DOM.");
//             return;
//         }

//         taskForm.classList.remove("hidden"); 
//     }, 100);
    
// }
    
        

// export const displayTask=()=>{

//     const contentdiv = document.getElementById("content");
//     contentdiv.innerHTML = "Tasks";
//     library.forEach((task,i)=>{
//         const taskdiv = document.createElement("div");
//         taskdiv.textContent = `${task.title},${task.priority},${task.status},${task.duedate}`;
        
//         const deletebtn = document.createElement("button");
//         deletebtn.textContent = "Delete";
//         deletebtn.onclick=()=>removetask(i);

//         const togglebtn = document.createElement("button");
//         togglebtn.textContent = task.status ==="Done"?"Not Done":"Done";
//         togglebtn.onclick=()=>toggle(i);

//         contentdiv.appendChild(taskdiv);
//         contentdiv.appendChild(deletebtn);
//         contentdiv.appendChild(togglebtn);

//     })
// }
// const toggle=(index)=>{
//     console.log("toggle");
//     library[index].status = library[index].status === "Done"?"Not Done":"Done";
//     displayTask();

// }
// const removetask=(index)=>{
//     console.log("remove");
//     library.splice(index,1);
//     displayTask();

// }