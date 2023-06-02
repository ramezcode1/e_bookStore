
document.getElementById("login").addEventListener("click", login);

function login(event) {
    event.preventDefault();
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    // check if user exist in allUsers
    let isUserExist = false;
    let index = 0;
    for (i = 0; i < allUsers.length; i++) {
        if (allUsers[i].username === username) {
            isUserExist = true;
            index = i;
        }
    }
    if (isUserExist) {
        if (allUsers[index].username === username && allUsers[index].password === password) {
            isLogin = true;
            currentUser = username;
            storeUser();
            document.getElementById("loginForm").submit();
        } else {
            displyErrorMsg();
        }
    } else {
        displyErrorMsg();
    }
}

function displyErrorMsg() {
    document.getElementById("errAlert").style.display = "block";
}