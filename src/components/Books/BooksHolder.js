import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./BooksHolder.module.css";

import BookCard from "./BookCard";

const BooksHolder = (props) => {
  const booksObj = useSelector((state) => state.books);
  const books = [].concat(booksObj.items);
  const itemNotFoundMsg = booksObj.totalItems == 0 ? <h1>Nothing have been found</h1> : null;
  const sort = useSelector((state) => state.sort);

  if (sort == "newest") {
    books.sort((a, b) => {
      let dateA = Date.parse(a.volumeInfo.publishedDate);
      let dateB = Date.parse(b.volumeInfo.publishedDate);
      dateA = new Date(dateA).getFullYear();
      dateB = new Date(dateB).getFullYear();
      return dateB - dateA;
    });
  }

  return (
    <div className={styles.BooksHolder}>
      {booksObj.items
        ? books.map((book) => <BookCard key={book.id} book={book} />)
        : itemNotFoundMsg}
    </div>
  );
};

export default BooksHolder;
