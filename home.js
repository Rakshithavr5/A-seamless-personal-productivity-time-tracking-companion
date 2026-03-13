// Home Screen Implementation

function loadHomeScreen() {
    const username = localStorage.getItem("username");

    if (username) {
        document.getElementById("welcomeMessage").innerText =
            "Welcome, " + username + "!";
    } else {
        document.getElementById("welcomeMessage").innerText =
            "Welcome to the Productivity Time Tracking App!";
    }
}
