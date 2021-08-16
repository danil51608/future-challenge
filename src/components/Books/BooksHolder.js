import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BooksHolder.module.css";

import BookCard from "./BookCard";

const BooksHolder = (props) => {
  const dispatch = useDispatch();
  const { makeRequest } = props;
  const searchText = useSelector((state) => state.searchText);
  const category = useSelector((state) => state.category);
  const page = useSelector((state) => state.page);
  const booksObj = useSelector((state) => state.booksObj);
  const books = booksObj.items;
  const sort = useSelector((state) => state.sort);
  const [loadMore, setLoadMore] = useState(true);

  const booksCopy = [].concat(books);

  const itemNotFoundMsg =
    booksObj.totalItems === 0 ? <h1>Nothing have been found</h1> : null;

  const loadMoreHandler = () => {
    const promise = makeRequest(searchText, category, page);
    promise
      .then((data) => {
        if (!data.items) {
          setLoadMore(false);
          return;
        }
        console.log(data);
        dispatch({ type: "LOAD_MORE_BOOKS", books: data.items });

        dispatch({ type: "SET_PAGE", page: page + 30 });
      })
      .finally(() => {
        dispatch({ type: "SHOW_LOADER", showLoader: false });
      });
  };

  if (sort === "newest") {
    booksCopy.sort((a, b) => {
      let dateA = Date.parse(a.volumeInfo.publishedDate);
      let dateB = Date.parse(b.volumeInfo.publishedDate);
      return dateB - dateA;
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.BooksHolder}>
        {books
          ? booksCopy.map((book) => (
              <Link key={book.id}
                style={{ textDecoration: "none", color: "#fff" }}
                to={{
                  pathname: `/book/:${book.id}`,
                  state: { book },
                }}
              >
                <BookCard  book={book} />
              </Link>
            ))
          : itemNotFoundMsg}
      </div>
      {books && (
        <div className={styles.loadMore}>
          {loadMore && <button onClick={loadMoreHandler}>Load More</button>}
          {!loadMore && <h1>No more books have been found</h1>}
        </div>
      )}
    </div>
  );
};

export default BooksHolder;
