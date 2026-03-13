// Settings Screen Implementation

function loadSettings() {
    const notifications = localStorage.getItem("notifications");

    if (notifications === "on") {
        document.getElementById("notificationStatus").innerText = "Notifications: ON";
    } else {
        document.getElementById("notificationStatus").innerText = "Notifications: OFF";
    }
}

function toggleSetting() {
    let status = localStorage.getItem("notifications");

    if (status === "on") {
        localStorage.setItem("notifications", "off");
    } else {
        localStorage.setItem("notifications", "on");
    }

    loadSettings();
}
