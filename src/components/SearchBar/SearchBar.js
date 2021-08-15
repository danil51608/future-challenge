import { useState } from "react";
import axios from "axios";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const searchChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const makeRequest = async () => {
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText}+subject:${category}`
      )
      .then((response) => response.data)
      .then((data) => props.setBooks(data))
      .catch((e) => props.setShowError(true));
  };

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
        />
        <button onClick={makeRequest}>Search</button>
      </div>
      <div className={styles["search-settings"]}>
        <label htmlFor="categories">Categories</label>
        <select onChange={categoryChangeHandler} id="categories">
          <option value="all">All</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
