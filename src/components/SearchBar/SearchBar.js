import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import styles from "./SearchBar.module.css";

import SearchSettings from "./SearchSettings";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

  const searchRef = useRef();

  const dispatch = useDispatch();

  const searchChangeHandler = (e) => {
    console.log(searchText);
    setSearchText(e.target.value);
  };

  const makeRequest = async () => {
    dispatch({ type: "SHOW_LOADER", showLoader: true });
    console.log(searchText);
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText}+subject:${category}`,
        { params: { startIndex: 0, maxResults: 30 } }
      )
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: "SET_BOOKS", books: data });
        dispatch({ type: "SHOW_LOADER", showLoader: false });
      })
      .catch((e) => dispatch({ type: "SHOW_ERROR", showError: true }));
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") {
        makeRequest();
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
        <input
          type="text"
          value={searchText}
          onChange={searchChangeHandler}
          className={styles.search}
          placeholder="Type a book name..."
          ref={searchRef}
        />
        <button onClick={makeRequest}>Search</button>
      </div>
      <SearchSettings setCategory={setCategory} />
    </div>
  );
};

export default SearchBar;
