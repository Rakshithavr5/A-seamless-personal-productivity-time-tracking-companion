// Login Function

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password");
    }
}
