function renderBookOverview(){
    let bookArticleRef = document.getElementById('bookArticlesContainer');
    bookArticleRef.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        bookArticleRef.innerHTML += getBookArticleTemplate(books[indexBook].name, books[indexBook].price, books[indexBook].author, books[indexBook].publishedYear, books[indexBook].genre, indexBook);        
        renderBookLikes(indexBook);
        renderBookComments(indexBook);
    }
}

function renderBookLikes(indexBook) {
    let bookLikesRef = document.getElementById('likesBookIndex' + indexBook);
    let bookLikedFromLocalStorage = localStorage.getItem('likedBookIndex' + indexBook);
    let likesNo = books[indexBook].likes;
    let liked = "";
    if (bookLikedFromLocalStorage === 'true') {
            liked = 'filled';
            likesNo = likesNo + 1;
        } else {
            liked = 'unfilled';
        }
    bookLikesRef.innerHTML = getBookLikesTemplate(indexBook, likesNo, liked);
}

function toggleLiked(indexBook) {
    if (localStorage.getItem('likedBookIndex' + indexBook) === 'true') {
        localStorage.setItem('likedBookIndex' + indexBook, 'false');
    } else if (localStorage.getItem('likedBookIndex' + indexBook) === 'false'){
        localStorage.setItem('likedBookIndex' + indexBook, 'true');
    }
    renderBookLikes(indexBook);
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
    let commentInputRef = document.getElementById('commentInputBookIndex' + indexBook);
    let commentInput = commentInputRef.value;
    let booksCommentsLocalStorageCache = JSON.parse(localStorage.getItem('commentsBookIndex' + indexBook));
    let usernameFromLocalStorage = localStorage.getItem('username');
    booksCommentsLocalStorageCache.push({'name':usernameFromLocalStorage, 'comment':commentInput});
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

function setLocalStorageLikedFromDB() {
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        if (localStorage.getItem('likedBookIndex' + indexBook) === null) {
            localStorage.setItem('likedBookIndex' + indexBook, books[indexBook].liked);
        }
    }
}

 function openUsernameDialog() {
    let usernameDialogRef = document.getElementById('usernameDialog');
    usernameDialogRef.showModal();
 }

 function closeUsernameDialog() {
    let usernameDialogRef = document.getElementById('usernameDialog');
    usernameDialogRef.close();
 }

function changeUsername() {
    let usernameFromInputRef = document.getElementById('usernameInput');
    let usernameFromInput = usernameFromInputRef.value;
    localStorage.setItem('username', usernameFromInput);
    renderUsername();
    event.preventDefault();
    closeUsernameDialog();
}

function renderUsername() {
    let shownUsernameRef = document.getElementById('shownUsername');
    let usernameFromLocalStorage;
    if (localStorage.getItem('username') === null) {
        usernameFromLocalStorage = 'unknown';
    } else {
        usernameFromLocalStorage = localStorage.getItem('username');
    }
    shownUsernameRef.innerHTML = getUsernameTemplate(usernameFromLocalStorage);
}