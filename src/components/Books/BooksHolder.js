import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./BooksHolder.module.css";

import BookCard from "./BookCard";

const BooksHolder = (props) => {
  const booksObj = useSelector((state) => state.books);
  const books = [].concat(booksObj.items);
  const itemNotFoundMsg =
    booksObj.totalItems == 0 ? <h1>Nothing have been found</h1> : null;
  const sort = useSelector((state) => state.sort);

  if (sort == "newest") {
    books.sort((a, b) => {
      let dateA = Date.parse(a.volumeInfo.publishedDate);
      let dateB = Date.parse(b.volumeInfo.publishedDate);
      return dateB - dateA;
    });
  }

  return (
    <div className={styles.BooksHolder}>
      {booksObj.items
        ? books.map((book) => (
            <Link style={{textDecoration: 'none', color: '#fff'}}to={{
              pathname: `/book/:${book.id}`, 
              state: {book},
            }}>
              <BookCard key={book.id} book={book} />
            </Link>
          ))
        : itemNotFoundMsg}
    </div>
  );
};

export default BooksHolder;
