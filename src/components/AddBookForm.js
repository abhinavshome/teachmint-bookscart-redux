import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import bookApi from "../api/bookApi";
import { addBook } from "../store/booksSlice";

const AddBookForm = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const book = Object.fromEntries(formData.entries());
        book.rating = +book.rating;
        book.price = +book.price;

        if(!book.title || !book.author || !book.price) {
            setMessage('All fields are required')
            return false;
        }

        setMessage('');
        try {
            const response = await bookApi.post('/books', book);
            dispatch(addBook(response.data));
            navigate('/');    
        } catch(e) {
            setMessage(e);
        }

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