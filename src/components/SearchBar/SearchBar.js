import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SearchBar.module.css";
import { TextField, Button } from '@material-ui/core';
import SearchSettings from "./SearchSettings";

const SearchBar = (props) => {
  const searchRef = useRef();
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.searchText);
  const category = useSelector((state) => state.category);
  const booksObj = useSelector((state) => state.booksObj);
  const page = useSelector((state) => state.page);

  const { makeRequest } = props;

  const searchChangeHandler = (e) => {
    dispatch({ type: "SET_SEARCH_TEXT", text: e.target.value });
  };

  const searchHandler = () => {
    const promise = makeRequest(searchText, category, page);
    promise
      .then((data) => {
        console.log(data);
        dispatch({ type: "SET_BOOKS_OBJ", booksObj: data });
        dispatch({ type: "SET_PAGE", page: 30 });
      })
      .finally(() => {
        dispatch({ type: "SHOW_LOADER", showLoader: false });
      });
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") {
        searchHandler();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [searchText]);

  return (
    <div className={styles.wrapper}>
      <h1>Search for books</h1>
      <div className={styles["search-container"]}>
        <TextField
          value={searchText}
          onChange={searchChangeHandler}
          className={styles.search}
          label="Type a book name..."
          ref={searchRef}
        />
        <Button variant='contained' color='primary' onClick={searchHandler}>Search</Button>
      </div>
      {booksObj.items && <h3>Found {booksObj.totalItems} results</h3>}
      <SearchSettings />
    </div>
  );
};

export default SearchBar;
