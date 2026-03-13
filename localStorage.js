// Local Storage Implementation

function saveTask(taskName) {
    localStorage.setItem("task", taskName);
}

function getTask() {
    return localStorage.getItem("task");
}

function clearTask() {
    localStorage.removeItem("task");
}
