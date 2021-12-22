import bookApi from "../api/bookApi";

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
            book.rating++;
        },
        rateDown: (books, action) => {
            const book = books.find(book => book.id === action.payload);
            book.rating--;
        },
    }
});

export const {loadBooks, addBook, rateUp, rateDown} = booksSlice.actions;

export const fetchBooksFromServer = () => async (dispatch, getState) => {
    try {
        const response = await bookApi.get('/books');
        dispatch(loadBooks(response.data));
    } catch(e) {

    }
};

export const rateUpOnServer = bookId => async (dispatch, getState) => {
    const state = getState();
    const book = state.books.find(b => b.id === bookId);
    if(book.rating < 5) {
        let reqPayload = {...book};
        reqPayload.rating++;
        try {
            await bookApi.put(`/books/${book.id}`, reqPayload);
            dispatch(rateUp(bookId))
        } catch(e) {
            
        }
    }
};

export const rateDownOnServer = bookId => async (dispatch, getState) => {
    const state = getState();
    const book = state.books.find(b => b.id === bookId);
    if(book.rating > 1) {
        let reqPayload = {...book};
        reqPayload.rating--;
        try {
            await bookApi.put(`/books/${book.id}`, reqPayload);
            dispatch(rateDown(bookId))
        } catch(e) {

        }
    }
};

const booksReducer = booksSlice.reducer;
export default booksReducer;