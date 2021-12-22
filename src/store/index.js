import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import cartReducer from "./cartSlice";
import filtersReducer from "./filtersSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        cart: cartReducer,
        filters: filtersReducer
    }
});

export default store;

