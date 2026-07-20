function getBookArticleTemplate(bookName, price, likesNo, liked, author, year, genre, indexBook) {
    return `<article class="bookArticle">
                <div class="bookName dividingLine paddingArticle">
                    <h2>${bookName}</h2>
                </div>
                <div class="pictureBook dividingLine paddingArticle">
                        <img src="./assets/img/clker-free-vector-images-book-306468.svg" alt="Abbildung Buch">
                </div>
                <div class="bookData dividingLine paddingArticle">
                        <div class="detailBookData">
                            <p>${price}€</p>
                            <div class="likeDetailBookData">
                                <p>${likesNo}</p>
                                <button><img src="./assets/img/heart-${liked}.png" alt="heart filled for like / heart unfilled for unlike"></button>
                            </div>
                        </div>
                        <table>
                            <tr>
                                <td class="leftSideTable">Author</td>
                                <td>:</td>
                                <td>${author}</td>
                            </tr>
                            <tr>
                                <td class="leftSideTable">Erscheinungsjahr</td>
                                <td>:</td>
                                <td>${year}</td>
                            </tr>
                            <tr>
                                <td class="leftSideTable">Genre</td>
                                <td>:</td>
                                <td>${genre}</td>
                            </tr>
                        </table>
                </div>
                <div class="bookComment paddingArticle" >
                        <h3>Kommentare:</h3>
                        <table id="book${indexBook}Comments">
                            
                        </table>
                </div>
                <div class="commentInputContainer">
                    <input type="text" name="commentInput" id="commentInputBookIndex${indexBook}" placeholder="Schreibe deinen Kommentar...">
                    <button onclick="sendComment(${indexBook})"><img src="" alt="Send"></button>
                </div>
            </article>`
}

function getBookCommentTemplate(username, comment) {
    return `<tr>
                <td class="leftSideTable">[${username}]</td>
                <td>:</td>
                <td>${comment}</td>
            </tr>`
}