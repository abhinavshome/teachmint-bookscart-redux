import Book from "./Book";

const BookList = ({books, inc, dec}) => {
    return (
        <div>
            {books.map(book => <Book key={book.id} book={book} inc={inc} dec={dec}/>)}
        </div>
    );
};

export default BookList;