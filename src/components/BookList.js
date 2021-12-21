import Book from "./Book";

const BookList = ({books, inc, dec, filters, addToCart}) => {
    return (
        <div>
            {books.map(book => <Book key={book.id} book={book} inc={inc} dec={dec} filters={filters} addToCart={addToCart}/>)}
        </div>
    );
};

export default BookList;