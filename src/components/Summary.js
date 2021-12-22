import { useSelector } from "react-redux";

const Summary = () => {
    const books = useSelector(state => state.books);
    return (
        <i>
            We have total {books.length} books and average rating is {books.reduce((res, b) => res + b.rating/books.length, 0)}
            <br/>
            <br/>
        </i>
    );
};

export default Summary;