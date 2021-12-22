import { useSelector } from "react-redux";
import Book from "./Book";

const BookList = () => {
    const books = useSelector(state => state.books);
    return (
        <div>
            {books.map(book => <Book key={book.id} bookId={book.id}/>)}
        </div>
    );
};

export default BookList;