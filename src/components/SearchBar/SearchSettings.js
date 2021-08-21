import { Fragment } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";
import { InputLabel, Select, MenuItem } from '@material-ui/core';

const SearchSettings = () => {
  const dispatch = useDispatch();

  const categoryChangeHandler = (e) => {
    dispatch({ type: "SET_CATEGORY", category: e.target.value });
  };

  const sortChangeHandler = (e) => {
    dispatch({ type: "SET_SORT", sort: e.target.value });
  };

  return (
    <Fragment>
      <div className={styles.searchSettings}>
        <InputLabel id="categories">Categories</InputLabel>
        <Select defaultValue='all' labelId="categories" onChange={categoryChangeHandler} id="categories">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="art">Art</MenuItem>
          <MenuItem value="biography">Biography</MenuItem>
          <MenuItem value="computers">Computers</MenuItem>
          <MenuItem value="history">History</MenuItem>
          <MenuItem value="medical">Medical</MenuItem>
          <MenuItem value="poetry">Poetry</MenuItem>
        </Select>
      </div>

      <div className={styles.searchSettings}>
        <InputLabel id="sort">Sort By</InputLabel>
        <Select defaultValue='relevance' onChange={sortChangeHandler} labelId='sort' id="sort">
          <MenuItem value="relevance">Relevance</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
        </Select>
      </div>
    </Fragment>
  );
};

export default SearchSettings;
