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
        renderBookComments(indexBook);
    }
}

function renderBookComments(indexBook) {
    let bookCommentRef = document.getElementById('book' + indexBook + 'Comments');
    let bookCommentFromLocalStorage = JSON.parse(localStorage.getItem('commentsBookIndex' + indexBook));
    bookCommentRef.innerHTML = "";
    for (let indexComment = bookCommentFromLocalStorage.length - 1; indexComment > -1; indexComment--) {
            bookCommentRef.innerHTML += getBookCommentTemplate(bookCommentFromLocalStorage[indexComment].name, bookCommentFromLocalStorage[indexComment].comment);
        }
}

function sendComment(indexBook) {
    let bookCommentRef = document.getElementById('book' + indexBook + 'Comments');
    let commentInputRef = document.getElementById('commentInputBookIndex' + indexBook).value;
    let booksCommentsLocalStorageCache = JSON.parse(localStorage.getItem('commentsBookIndex' + indexBook));
    booksCommentsLocalStorageCache.push({'name':'actualUser', 'comment':commentInputRef});
    localStorage.setItem('commentsBookIndex' + indexBook, JSON.stringify(booksCommentsLocalStorageCache));
    renderBookComments(indexBook);
}

function setLocalStorageCommentsFromDB() {
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        if (localStorage.getItem('commentsBookIndex' + indexBook) === null) {
            localStorage.setItem('commentsBookIndex' + indexBook, JSON.stringify(books[indexBook].comments));
        }
    }
}