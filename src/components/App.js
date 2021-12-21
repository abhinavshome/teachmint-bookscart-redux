import './App.css';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import Summary from './Summary';
import { useState } from 'react';
import Filters from './Filters';
import AddBookForm from './AddBookForm';
import Cart from './Cart';


function App() {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'The Alchemist',
      author: 'Paulo Cohelo',
      price: 20,
      rating: 3
    },
    {
      id: uuidv4(),
      title: 'Monk who sold his ferrari',
      author: 'Robin Sharma',
      price: 40,
      rating: 2
    },
    {
      id: uuidv4(),
      title: 'Power of Now',
      author: 'Eckhart Tolle',
      price: 10,
      rating: 5
    },
    {
      id: uuidv4(),
      title: 'Five point someone',
      author: 'Chetan Bhagat',
      price: 35,
      rating: 1
    },
  ]);
  const [filters, setFilters] = useState({
    showHighRated: false,
    showLessCostly: false
  });
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
    totalItems: 0
  });
  const inc = (bookId) => {
    const newBooks = [...books];
    const book = newBooks.find(b => b.id === bookId);
    if(book.rating < 5) {
      book.rating++;
    }
    setBooks(newBooks);
  };
  const dec = (bookId) => {
    const newBooks = [...books];
    const book = newBooks.find(b => b.id === bookId);
    if(book.rating > 1) {
      book.rating--;
    }
    setBooks(newBooks);
  };
  const toggleFilters = (filterName) => {
    const newFilters = {...filters};
    newFilters[filterName] = !newFilters[filterName];
    setFilters(newFilters);
  };

  const addBook = (book) => {
    const newBooks = [...books];
    newBooks.push(book);
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
      <Summary books={books}/>
      <Cart cart={cart}/>
      <AddBookForm addBook={addBook}/>
      <Filters filters={filters} toggleFilters={toggleFilters}/>
      <BookList books={books} inc={inc} dec={dec} filters={filters} addToCart={addToCart}/>
    </div>
  );
}

export default App;
