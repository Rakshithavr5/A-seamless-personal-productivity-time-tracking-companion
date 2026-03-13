// Settings Menu Implementation

function openSettings() {
    document.getElementById("settingsMenu").style.display = "block";
}

function closeSettings() {
    document.getElementById("settingsMenu").style.display = "none";
}

function toggleNotifications() {
    let status = localStorage.getItem("notifications");

    if (status === "on") {
        localStorage.setItem("notifications", "off");
        alert("Notifications turned off");
    } else {
        localStorage.setItem("notifications", "on");
        alert("Notifications turned on");
    }
}
