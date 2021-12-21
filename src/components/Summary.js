const Summary = ({books}) => {
    return (
        <i>
            We have total {books.length} books and average rating is {books.reduce((res, b) => res + b.rating/books.length, 0)}
            <br/>
            <br/>
        </i>
    );
};

export default Summary;