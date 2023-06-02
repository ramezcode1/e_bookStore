let userIn = document.getElementById("user");
let passwordIn = document.getElementById("password");
let confirmPasswordIn = document.getElementById("confirm-password");
let successAlert = document.getElementById("successAlert");
let errAlert = document.getElementById("errAlert");
let errMsg = '';

document.getElementById("register").addEventListener("click", register);

function register(event) {
    event.preventDefault();
    clearDisplayMsg();
    if (checkValidity()) {
        let user = {username: userIn.value, password: passwordIn.value}
        allUsers.push(user);
        storeAllUsers();
        displySuccessMsg();
    } else {
        displyErrorMsg();
    }
}

function checkValidity() {
    let checkFields = true;
    if (userIn.value === '' || userIn.value.length < 4) {
        errMsg += "Username must be at least 4 characters" + "<br />";
        checkFields = false;
    }
    if (passwordIn.value === '' || passwordIn.value.length < 5) {
        errMsg += "Password must be at least 5 characters" + "<br />";
        checkFields = false;
    }
    if (passwordIn.value !== confirmPasswordIn.value) {
        errMsg += "Password Confirmation must match your Password";
        checkFields = false;
    }
    return checkFields;
}

function displyErrorMsg() {
    errAlert.innerHTML = errMsg;
    errAlert.style.display = "block";
}

function displySuccessMsg() {
    successAlert.style.display = "block"
}

function clearDisplayMsg() {
    errMsg = '';
    errAlert.innerHTML = "";
    errAlert.style.display = "none";
    successAlert.style.display = "none"
}