function renderBookOverview(){
    let bookArticleRef = document.getElementById('bookArticlesContainer');
    bookArticleRef.innerHTML = "";
    let liked = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        if (books[indexBook].liked === true) {
            liked = 'filled';
        } else {
            liked = 'unfilled';
        }
        bookArticleRef.innerHTML += getBookArticleTemplate(books[indexBook].name, books[indexBook].price, books[indexBook].likes, liked, books[indexBook].author, books[indexBook].publishedYear, books[indexBook].genre, indexBook);
        let bookCommentRef = document.getElementById('book' + indexBook + 'Comments');
        bookCommentRef.innerHTML = "";
        for (let indexComment = books[indexBook].comments.length - 1; indexComment > -1; indexComment--) {
            bookCommentRef.innerHTML += getBookCommentTemplate(books[indexBook].comments[indexComment].name, books[indexBook].comments[indexComment].comment);
        }
    }
}

function sendComment(indexBook) {
    let bookCommentRef = document.getElementById('book' + indexBook + 'Comments');
    let commentInputRef = document.getElementById('commentInput').value;
    bookCommentRef.innerHTML += getBookCommentTemplate('actualUser', commentInputRef);
}