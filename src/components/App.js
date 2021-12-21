import './App.css';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import Summary from './Summary';
import { useState } from 'react';


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
  return (
    <div className="App">
      <h1>BooksCart</h1>
      <Summary books={books}/>
      <BookList books={books} inc={inc} dec={dec}/>
    </div>
  );
}

export default App;
