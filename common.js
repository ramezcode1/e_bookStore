
//  update NavBar once a user is logged-in or item added to the Cart
if (isLogin) {
    document.getElementById("loginLink").style.display = "none";
    document.getElementById("registerLink").style.display = "none";
    document.getElementById("logoutLink").innerHTML = currentUser + " Logout";
}

document.querySelector(".badge").innerHTML = cartCount + ' ($' + cartPrice + ')';