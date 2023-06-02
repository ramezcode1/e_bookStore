
//  Dynamic Display HTML Content
for (let i = 0; i < likeBooks.length; i++) {
    let card =
        `<div id="itemCard${likeBooks[i].id}" class="col">
        <div class="card">
            <div class="card-image">
                <img src="images\\${likeBooks[i].img}"
                     class="card-img-top" alt="...">
                <button class="btn btn-danger card-like" onclick="dislike(${likeBooks[i].id})">X</button>
            </div>
            <div class="card-body">
                <h3 class="card-title">${likeBooks[i].title}</h3>
                <p><u class="card-text">${likeBooks[i].author}</u></p>
                <div class="cost-part">
                    <h3>$${likeBooks[i].price}</h3>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById("row").innerHTML += card
}

function dislike(id) {
    let bookIndex = likeBooks.findIndex(function (book) {
        return book.id === id;
    });
    likeBooks.splice(bookIndex, 1);
    document.getElementById("itemCard" + id).remove();
    storeLikes();
}