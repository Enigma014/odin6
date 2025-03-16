
import "./styles.css";




document.addEventListener("DOMContentLoaded", () => {
    console.log("App Initialized");

    let library = [];

    // ✅ Task Constructor
    function Task(title, duedate, priority, status) {
        this.title = title;
        this.duedate = duedate;
        this.priority = priority;
        this.status = status;
    }
    function loadTasks(){
        const storedTasks = localStorage.getItem("tasks");
        if(storedTasks){
            library=JSON.parse(storedTasks);
        }
        displayTasks();
    }
    function saveTasks(){
        localStorage.setItem("tasks",JSON.stringify(library));
    }
    //document.addEventListener("DOMContentLoaded",()=>{
        document.getElementById("create").addEventListener("click", () => {
            const taskForm = document.getElementById("taskform");
            if (taskForm) {
                taskForm.classList.remove("hidden"); // ✅ Show the form
            } else {
                console.error("❌ Task form not found in the DOM.");
            }
        });
    
        // ✅ Handle task submission
        document.getElementById("taskform").addEventListener("submit", (event) => {
            event.preventDefault();
            createTask();
            
        });
    //})
    // ✅ Show the task form when "Create Task" button is clicked
    

    // ✅ Create a new task
    function createTask() {
        console.log("inside create");

        const title = document.getElementById("title").value;
        const duedate = document.getElementById("duedate").value;
        const priority = document.getElementById("priority").value;
        const status = document.getElementById("status").value;

        const task = new Task(title, duedate, priority, status);
        library.push(task);
        saveTasks()
        displayTasks();

        document.getElementById("taskform").reset();

        
    }

    // ✅ Display Tasks
    function displayTasks() {
        const contentdiv = document.getElementById("content");
        contentdiv.innerHTML = "<h3>Tasks</h3>"; // ✅ Reset before re-rendering

        library.forEach((task, i) => {
            const taskdiv = document.createElement("div");
            taskdiv.textContent = `${task.title}, ${task.priority}, ${task.status}, ${task.duedate}`;

            // ✅ Toggle Task Status Button
            const togglebtn = document.createElement("button");
            togglebtn.textContent = task.status === "Done" ? "Not Done" : "Done";
            togglebtn.onclick = () => toggleTask(i);

            // ✅ Delete Task Button
            const deletebtn = document.createElement("button");
            deletebtn.textContent = "Delete";
            deletebtn.onclick = () => removeTask(i);

            taskdiv.appendChild(togglebtn);
            taskdiv.appendChild(deletebtn);
            contentdiv.appendChild(taskdiv);
        });
    }

    // ✅ Toggle Task Status
    function toggleTask(index) {
        library[index].status = library[index].status === "Done" ? "Not Done" : "Done";
        saveTasks()
        displayTasks();
    }

    // ✅ Remove a Task
    function removeTask(index) {
        library.splice(index, 1);
        saveTasks()
        displayTasks();
    }
    loadTasks();
});


