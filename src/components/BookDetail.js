import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookDetail = () => {
    const params = useParams();
    const bookId = +params.bookId;
    const book = useSelector(state => state.books.find(b => b.id === bookId));
    console.log(bookId);
    if(!book) {
        return <div>Loading..</div>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <i>{book.author}</i>
        </div>
    );
};

export default BookDetail;