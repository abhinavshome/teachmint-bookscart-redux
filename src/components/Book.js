import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import bookApi from '../api/bookApi';
import { rateDown, rateUp, rateUpOnServer } from '../store/booksSlice';
import { addToCart } from '../store/cartSlice';
import './Book.css';
import Stars from './Stars';

const Book = ({bookId}) => {
    let book = useSelector(state => state.books.find(b => b.id === bookId));
    console.log(book);

    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    if(filters.showHighRated && book.rating < 4) {
        return '';
    }

    if(filters.showLessCostly && book.price > 15) {
        return '';
    }

    const rateBookUp = async () => {
        const b = {...book};
        if(b.rating < 5) {
            b.rating++;
            await bookApi.put(`/books/${b.id}`, b)
        }
        // dispatch(rateUp(bookId));
        dispatch(rateUpOnServer(bookId));
    };

    const rateBookDown = async () => {
        const b = {...book};
        if(b.rating > 1) {
            b.rating--;
            await bookApi.put(`/books/${b.id}`, b)
        }
        dispatch(rateDown(bookId));
    };

    return (
        <div>
            <div className="title">
                <Link to={'/book/' + book.id}>{book.title}</Link>
            </div>
            <div className="author">{book.author}</div>
            <div>{book.price}</div>
            <div><Stars rating={book.rating}/></div>
            <button onClick={rateBookUp}>+</button>
            <button onClick={rateBookDown}>-</button>
            <button onClick={() => dispatch(addToCart(book))}>@</button>
            <hr/>
        </div>
    );
};

export default Book;