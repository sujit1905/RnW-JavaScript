    let userDB = JSON.parse(localStorage.getItem("users")) || [];
    function Ragister() {
    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;

    if (username && password) {
        if (userDB.some((user) => user.username === username)) {
        alert("Username alreday taken");
        } else {
        userDB.push({ username, password });
        localStorage.setItem("users", JSON.stringify(userDB));
        alert("Ragister completed!");
        document.getElementById("reg-username").value = "";
        document.getElementById("reg-password").value = "";
        }
    } else {
        alert("please Enter the Data");
    }
    }
    function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = userDB.find(
        (user) => user.username === username && user.password === password
    );

    if (user) {
        const form = (document.getElementById("login-form").style.display = "none");
        let welcome = (document.getElementById("welcome-msg").style.display =
        "block");
        const error = (document.getElementById("error-message").style.display =
        "none");
        let welcomemsg = (document.getElementById(
        "usernametext"
        ).innerText = `${username}`);
        let logouttbn = (document.getElementById("log-out").style.display =
        "block");
        localStorage.setItem("loginuser", JSON.stringify(user));
    } else {
        const error = (document.getElementById("error-message").style.display =
        "block");
    }
    }
    function logout() {
    let logouttbn = (document.getElementById("log-out").style.display = "none");
    const form = (document.getElementById("login-form").style.display = "block");
    let welcome = (document.getElementById("welcome-msg").style.display = "none");
        localStorage.removeItem("loginuser")

    }
        
        function checkLoggedIn() {
        let loggedInUser = JSON.parse(localStorage.getItem("loginuser"));

        if (loggedInUser) {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("welcome-msg").style.display = "block";

            let logouttbn = (document.getElementById("log-out").style.display = "block");
            let welcome = (document.getElementById("welcome-msg").style.display =
            "block");
            let welcomemsg = (document.getElementById(
            "usernametext"
            ).innerText = `${loggedInUser.username}`);
        }
        }

    checkLoggedIn();
