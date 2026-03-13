// Signup Function

function signup() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // Store user data
    const user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");
}
