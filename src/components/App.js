import './App.css';
import BookList from './BookList';
import Summary from './Summary';
import { useEffect, useState } from 'react';
import Filters from './Filters';
import AddBookForm from './AddBookForm';
import Cart from './Cart';
import { NavLink, Route, Routes } from 'react-router-dom';
import BookDetail from './BookDetail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksFromServer } from '../store/booksSlice';



function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  dispatch(fetchBooksFromServer());

  return (
    <div className="App">
      <h1>BooksCart</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart({cart.totalItems})</NavLink>
        <NavLink to="/add-book">Add Book</NavLink>
      </nav>
      <Summary/>
      <Routes>
        <Route path="/" element={<div><Filters/><BookList/></div>} />
        <Route path="cart" element={<Cart/>}/>
        <Route path="add-book" element={<AddBookForm/>} />        
        <Route path="/book/:bookId" element={<BookDetail/>} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;
