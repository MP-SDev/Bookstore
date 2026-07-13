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
        bookArticleRef.innerHTML += getBookArticleTemplate(books[indexBook].name, books[indexBook].price, books[indexBook].likes, liked, books[indexBook].author, books[indexBook].publishedYear, books[indexBook].genre);
        let bookCommentRef = document.getElementById('bookComments');
        bookCommentRef.innerHTML = "";
        for (let indexComment = 0; indexComment < books[indexBook].comments.length; indexComment++) {
            bookCommentRef.innerHTML += getBookCommentTemplate(books[indexBook].comments[indexComment].name, books[indexBook].comments[indexComment].comment);
        }
    }
}