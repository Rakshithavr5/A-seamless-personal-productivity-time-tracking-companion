// Detail Screen Implementation

function showTaskDetail() {
    const taskName = localStorage.getItem("taskName");
    const taskTime = localStorage.getItem("taskTime");

    if (taskName && taskTime) {
        document.getElementById("taskTitle").innerText = taskName;
        document.getElementById("taskDuration").innerText = taskTime;
    } else {
        document.getElementById("taskTitle").innerText = "No task selected";
    }
}
