import {useSelector} from 'react-redux'
import SearchBar from './components/SearchBar/SearchBar'
import BooksHolder from './components/Books/BooksHolder'
import Error from './components/Error/Error'
import Loader from './components/UI/Loader'
import './App.css';

function App() {
  const showError = useSelector(state => state.showError)
  const showLoader = useSelector(state => state.showLoader)
  return (
    <div className="container">
      <SearchBar />
      {showLoader && <Loader />}
      {showError && <Error />}
      <BooksHolder />
    </div>
  );
}

export default App;
