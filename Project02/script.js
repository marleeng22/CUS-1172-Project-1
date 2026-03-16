let tasks = [];

let form = document.getElementById("taskForm");

form.onsubmit = function(event) {
    event.preventDefault();

    let title = document.getElementById("taskTitle").value;
    let priority = document.getElementById("taskPriority").value;

    let status = "Pending";
    let buttons = document.getElementsByName("taskStatus");

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            status = buttons[i].value;
        }
    }

    let task = {
        taskTitle: title,
        taskPriority: priority,
        taskStatus: status
    };

    tasks.push(task);

    showTasks();
};

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        li.innerHTML = tasks[i].taskTitle + " - " + tasks[i].taskPriority + " - " + tasks[i].taskStatus;

        if (tasks[i].taskStatus === "Completed") {
            li.style.textDecoration = "line-through";
        }

        let completeBtn = document.createElement("button");
        completeBtn.innerHTML = "Complete";

        completeBtn.onclick = function() {
            tasks[i].taskStatus = "Completed";
            showTasks();
        };

        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";

        removeBtn.onclick = function() {
            tasks.splice(i, 1);
            showTasks();
        };

        li.appendChild(completeBtn);
        li.appendChild(removeBtn);

        list.appendChild(li);
    }
}