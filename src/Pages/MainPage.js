import {Fragment} from 'react'
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar";
import BooksHolder from "../components/Books/BooksHolder";
import Error from "../components/Error/Error";
import Loader from "../components/UI/Loader";
import axios from "axios";

const MainPage = (props) => {
  const showError = useSelector((state) => state.showError);
  const showLoader = useSelector((state) => state.showLoader);
  
  const dispatch = useDispatch();

  const makeRequest = async (searchText, category, page) => {
    dispatch({ type: "SHOW_LOADER", showLoader: true });
     const promise = await axios
       .get(
         `https://www.googleapis.com/books/v1/volumes?q=${searchText}+subject:${category}`,
         { params: { startIndex: page, maxResults: 30 } }
       ).then(res => res.data)
       .catch((e) => dispatch({ type: "SHOW_ERROR", showError: true }));
       return promise
   };


  return (
    <Fragment>
      <SearchBar makeRequest={makeRequest}/>
      {showLoader && <Loader />}
      {showError && <Error />}
      <BooksHolder makeRequest={makeRequest}/>
    </Fragment>
  );
};

export default MainPage;
