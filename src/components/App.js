import './App.css';
import BookList from './BookList';
import Summary from './Summary';
import { useEffect, useState } from 'react';
import Filters from './Filters';
import AddBookForm from './AddBookForm';
import Cart from './Cart';
import { NavLink, Route, Routes } from 'react-router-dom';
import BookDetail from './BookDetail';
import bookApi from '../api/bookApi';


function App() {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({
    showHighRated: false,
    showLessCostly: false
  });
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
    totalItems: 0
  });

  const loadBooks = async () => {
    console.log('loading books');
    const resonse = await bookApi.get('/books');
    setBooks(resonse.data);
  }

  useEffect(() => {
    loadBooks();
  }, []);

  const inc = async (bookId) => {
    const newBooks = [...books];
    const book = newBooks.find(b => b.id === bookId);
    if(book.rating < 5) {
      book.rating++;
    }
    await bookApi.put(`/books/${bookId}`, book);
    setBooks(newBooks);
  };
  const dec = async (bookId) => {
    const newBooks = [...books];
    const book = newBooks.find(b => b.id === bookId);
    if(book.rating > 1) {
      book.rating--;
    }
    await bookApi.put(`/books/${bookId}`, book);
    setBooks(newBooks);
  };
  const toggleFilters = (filterName) => {
    const newFilters = {...filters};
    newFilters[filterName] = !newFilters[filterName];
    setFilters(newFilters);
  };

  const addBook = async (book) => {
    const response = await bookApi.post('/books', book);
    const bookFromServer = response.data;
    const newBooks = [...books];
    newBooks.push(bookFromServer);
    setBooks(newBooks);
  };

  const addToCart = (book) => {
    const newCart = {...cart};
    const item = newCart.items.find(i => i.itemId === book.id);
    if(item) {
      item.qty++;
    } else {
      const item = {
        itemId: book.id,
        name: book.title,
        price: book.price,
        qty: 1
      };
      newCart.items.push(item);  
    }

    newCart.totalPrice += book.price;
    newCart.totalItems++;
    setCart(newCart);
  }

  return (
    <div className="App">
      <h1>BooksCart</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart({cart.totalItems})</NavLink>
        <NavLink to="/add-book">Add Book</NavLink>
      </nav>
      <Summary books={books}/>
      <Routes>
        <Route path="/" element={<div>
          <Filters filters={filters} toggleFilters={toggleFilters}/>
          <BookList books={books} inc={inc} dec={dec} filters={filters} addToCart={addToCart}/>
        </div>} />
        <Route path="cart" element={<Cart cart={cart}/>}/>
        <Route path="add-book" element={<AddBookForm addBook={addBook}/>} />        
        <Route path="/book/:bookId" element={<BookDetail books={books}/>} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;
