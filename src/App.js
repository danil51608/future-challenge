import { BrowserRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./components/SearchBar/SearchBar";
import BooksHolder from "./components/Books/BooksHolder";
import BookDetail from "./components/Books/BookDetail";
import Error from "./components/Error/Error";
import Loader from "./components/UI/Loader";
import axios from "axios";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const showError = useSelector((state) => state.showError);
  const showLoader = useSelector((state) => state.showLoader);
  const apiKey = process.env.REACT_APP_KEY
  const makeRequest = async (searchText, category, page) => {
    dispatch({ type: "SHOW_LOADER", showLoader: true });
    const promise = await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText}+subject:${category}&key=${apiKey}`,
        { params: { startIndex: page, maxResults: 30 } }
      )
      .then((res) => res.data)
      .catch((e) => dispatch({ type: "SHOW_ERROR", showError: true }));
    return promise;
  };

  return (
    <BrowserRouter>
      <div className="container">
        <SearchBar makeRequest={makeRequest} />
        <div className="content-container">
          <BooksHolder makeRequest={makeRequest} />
          <Route path="/book/:id" children={<BookDetail />} />
        </div>
        {showLoader && <Loader />}
        {showError && <Error />}
      </div>
    </BrowserRouter>
  );
}

export default App;
