import { useState } from "react";
import { v4 } from "uuid";

const AddBookForm = ({addBook}) => {
    const [message, setMessage] = useState('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const book = Object.fromEntries(formData.entries());
        book.rating = +book.rating;
        book.price = +book.price;
        book.id = v4();

        if(!book.title || !book.author || !book.price) {
            setMessage('All fields are required')
            return false;
        }

        setMessage('');
        addBook(book);
    } 
    return (
        <>
        <div style={{color: 'red'}}>{message}</div>
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title"/>
            </div>
            <div>
                <label>Author</label>
                <input type="text" name="author"/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price"/>
            </div>
            <div>
                <label>Rating</label>
                <select name="rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <button type="submit">Add</button>
            <br/><br/>
        </form>
        </>
    );  
};

export default AddBookForm;