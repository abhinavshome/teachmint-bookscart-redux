import './Book.css';
import Stars from './Stars';

const Book = ({book, inc, dec, filters, addToCart}) => {
    if(filters.showHighRated && book.rating < 4) {
        return '';
    }

    if(filters.showLessCostly && book.price > 15) {
        return '';
    }

    return (
        <div>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            <div>{book.price}</div>
            <div><Stars rating={book.rating}/></div>
            <button onClick={() => inc(book.id)}>+</button>
            <button onClick={() => dec(book.id)}>-</button>
            <button onClick={() => addToCart(book)}>@</button>
            <hr/>
        </div>
    );
};

export default Book;