let cartCount = 0;
let cartPrice = 0;
let cartItems = [];
let isLogin = false;
let currentUser = ''
let allUsers = [];
let likeBooks = [];
getCart();
getLoginUser();
getLikes();

function getCart() {
    cartCount = Number(localStorage.getItem("cartCount"));
    cartPrice = Number(localStorage.getItem("cartPrice"));
    cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
    } else {
        cartItems = [];
    }
}

//  Save the cart in local storage
function storeCart() {
    localStorage.setItem("cartCount", cartCount);
    localStorage.setItem("cartPrice", cartPrice);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function storeUser() {
    localStorage.setItem("isLogin", isLogin);
    localStorage.setItem("currentUser", currentUser);
}

function storeAllUsers() {
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

function getLoginUser() {
    isLogin = (localStorage.getItem("isLogin") === 'true');
    currentUser = localStorage.getItem("currentUser");
    allUsers = localStorage.getItem("allUsers");
    if (allUsers) {
        allUsers = JSON.parse(allUsers);
    } else {
        allUsers = [];
    }
}

function logout() {
    localStorage.removeItem("cartCount");
    localStorage.removeItem("cartPrice");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");
}

function getLikes() {
    likeBooks = localStorage.getItem("likeBooks");
    if (likeBooks) {
        likeBooks = JSON.parse(likeBooks);
    } else {
        likeBooks = [];
    }
}

function storeLikes() {
    localStorage.setItem("likeBooks", JSON.stringify(likeBooks));
}
