// Notification Implementation

function sendNotification() {
    if (Notification.permission === "granted") {
        new Notification("Productivity App", {
            body: "This is your task reminder notification!"
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Productivity App", {
                    body: "Notification enabled successfully!"
                });
            }
        });
    }
}
