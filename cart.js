
//  Dynamic Display Table Row Content
for (let i = 0; i < cartItems.length; i++) {
    let tr =
        `<tr id="itemRow${cartItems[i].id}">
            <td><img src="images\\${cartItems[i].img}"></td>
            <td>${cartItems[i].title}</td>
            <td>$${cartItems[i].price}</td>
            <td><button class="btn btn-danger" onclick="removeItem(${cartItems[i].id})">X</button></td>
        </tr>`
    document.getElementById("tbody").innerHTML += tr
}
// update Total price in table footer
document.getElementById("totalPrice").innerHTML = "$" + cartPrice;

// remove item from cart table
function removeItem(id) {
    let bookIndex = cartItems.findIndex(function (book) {
        return book.id === id;
    });
    cartCount--;
    cartPrice -= cartItems[bookIndex].price;
    cartItems.splice(bookIndex, 1);
    document.getElementById("itemRow" + id).remove();
    document.getElementById("totalPrice").innerHTML = "$" + cartPrice;
    document.querySelector(".badge").innerHTML = cartCount + ' ($' + cartPrice + ')';
    storeCart();
}

/*document.getElementById("tbody").addEventListener("click", (e) => {
    console.log(e.target.closest('tr').id);     //get the closest ancestor with tr tag
})*/

function checkout() {
    if (isLogin) {
        alert("Your order has been successfully processed!!");
        cartCount = 0;
        cartPrice = 0;
        cartItems = [];
        storeCart();
    } else {
        alert("Please login to checkout!!");
    }
}