import {useState} from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import BooksHolder from './components/Books/BooksHolder'
import Error from './components/Error/Error'
import './App.css';

function App() {
  const [books, setBooks] = useState()
  const [showError, setShowError] = useState(false)
  return (
    <div className="container">
      <SearchBar setShowError={setShowError} setBooks={setBooks} />
      {showError && <Error setShowError={setShowError}/>}
      {books && <BooksHolder books={books.items} />}
    </div>
  );
}

export default App;
