import './Book.css';
import Stars from './Stars';

const Book = ({book, inc, dec}) => {
    return (
        <div>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            <div>{book.price}</div>
            <div><Stars rating={book.rating}/></div>
            <button onClick={() => inc(book.id)}>+</button>
            <button onClick={() => dec(book.id)}>-</button>
            <hr/>
        </div>
    );
};

export default Book;