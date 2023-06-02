let products = [
    {
        id: 1,
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        price: 15,
        img: 'Harry Potter and the Deathly Hallows_J.K. Rowling.jpg'
    },
    {
        id: 2,
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        price: 12,
        img: 'Harry Potter and the Order of the Phoenix_ J.K. Rowling.jpg'
    },
    {
        id: 3,
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        price: 16,
        img: 'Harry Potter and the Goblet of Fire_ J.K. Rowling.jpg'
    },
    {
        id: 4,
        title: 'Learn Backbone.js, Node.js, and MongoDB, 2nd Edition',
        author: 'Azat Mardan',
        price: 20,
        img: 'Full Stack JavaScript_ Learn Backbone.js, Node.js, and MongoDB, 2nd Edition _ Azat Mardan.jpg'
    },
    {
        id: 5,
        title: 'Introduction To HTML & CSS - Learn Code Websites Like A Pro',
        author: 'Danny Ajini',
        price: 25,
        img: 'Introduction To HTML & CSS - Learn To Code Websites Like A Pro _ Danny Ajini.jpg'
    },
    {
        id: 6,
        title: 'Java_ A Beginner Guide, Eighth Edition',
        author: 'Herbert Schildt',
        price: 10,
        img: 'Java_ A Beginner Guide, Eighth Edition _ Herbert Schildt.jpg'
    },
    {
        id: 7,
        title: 'Interactive Object-Oriented Programming in Java',
        author: 'Vaskaran Sarcar',
        price: 14,
        img: 'Interactive Object-Oriented Programming in Java _ Vaskaran Sarcar.jpg'
    },
    {
        id: 8,
        title: 'HTML, CSS and JavaScript in Easy Steps',
        author: 'Mike McGrath',
        price: 22,
        img: 'HTML, CSS and JavaScript in Easy Steps _ Mike McGrath.jpg'
    },
    {
        id: 9,
        title: 'Web Programming with HTML5, CSS, and JavaScript',
        author: 'John Dean',
        price: 18,
        img: 'Web Programming with HTML5, CSS, and JavaScript _ John Dean.jpg'
    }
]

//  Dynamic Display HTML Content
for (let i = 0; i < products.length; i++) {
    let card =
        `<div class="col">
        <div class="card">
            <div class="card-image">
                <img src="images\\${products[i].img}"
                     class="card-img-top" alt="...">
                <img id="cardLike${i}" class="card-like" src="like-icon.png" onclick="like(${i})">
            </div>
            <div class="card-body">
                <h3 class="card-title">${products[i].title}</h3>
                <p><u class="card-text">${products[i].author}</u></p>
                <div class="cost-part">
                    <h3>$${products[i].price}</h3><button class="btn btn-primary" onclick="addToCart(${products[i].id})">Add to cart</button>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById("row").innerHTML += card
}

function addToCart(id) {
    //  get the selected item
    let item = products.find(function (book) {
        return book.id === id;
    });
    //  Add item to the cart only if the item not exist in cart list
    // you can not add single item more than once
    let isItemInCart = false;
    for (i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === item.id) {
            isItemInCart = true;
        }
    }
    if (!isItemInCart) {
        cartCount++;
        cartPrice += item.price;
        cartItems.push(item);
        document.querySelector(".badge").innerHTML = cartCount + ' ($' + cartPrice + ')';
        storeCart();
    }
}

function like(i) {
    let item = products[i];
    //  Add book to the like only if the book not exist in likeBooks
    let isItemLiked = false;
    for (let j = 0; j < likeBooks.length; j++) {
        if (likeBooks[j].id === item.id) {
            isItemLiked = true;
        }
    }
    if (!isItemLiked) {
        likeBooks.push(item);
        storeLikes();
        document.getElementById("cardLike" + i).classList.add("card-like-select");
    }
}