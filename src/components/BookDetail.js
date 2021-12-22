import { useParams } from "react-router-dom";

const BookDetail = ({books}) => {
    const params = useParams();
    const bookId = params.bookId;
    console.log(bookId);
    const book = books.find(b => b.id === bookId);
    console.log(books, book);
    return (
        <div>
            <h2>{book.title}</h2>
            <i>{book.author}</i>
        </div>
    );
};

export default BookDetail;