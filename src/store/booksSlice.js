const { createSlice } = require("@reduxjs/toolkit");

const booksSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        loadBooks: (books, action) => {
            return action.payload;
            // action.payload.forEach(book => books.push(book))
        },
        addBook: (books, action) => {
            books.push(action.payload);
        },
        rateUp: (books, action) => {
            const book = books.find(book => book.id === action.payload);
            if(book.rating < 5) {
                book.rating++;
            }
        },
        rateDown: (books, action) => {
            const book = books.find(book => book.id === action.payload);
            if(book.rating > 1) {
                book.rating--;
            }
        },
    }
});

export const {loadBooks, addBook, rateUp, rateDown} = booksSlice.actions;

const booksReducer = booksSlice.reducer;
export default booksReducer;