import {useSelector} from 'react-redux'
import SearchBar from './components/SearchBar/SearchBar'
import BooksHolder from './components/Books/BooksHolder'
import Error from './components/Error/Error'
import './App.css';

function App() {
  const showError = useSelector(state => state.showError)
  return (
    <div className="container">
      <SearchBar />
      {showError && <Error />}
      <BooksHolder />
    </div>
  );
}

export default App;
