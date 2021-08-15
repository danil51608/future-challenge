import {Fragment} from 'react'
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar";
import BooksHolder from "../components/Books/BooksHolder";
import Error from "../components/Error/Error";
import Loader from "../components/UI/Loader";

const MainPage = (props) => {
  const showError = useSelector((state) => state.showError);
  const showLoader = useSelector((state) => state.showLoader);
  return (
    <Fragment>
      <SearchBar />
      {showLoader && <Loader />}
      {showError && <Error />}
      <BooksHolder />
    </Fragment>
  );
};

export default MainPage;