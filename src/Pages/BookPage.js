import {useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import styles from "./BookPage.module.css";
import emptyCover from '../Assets/empty_cover.png'
const BookPage = (props) => {
  const data = useLocation();
  const book = data.state.book.volumeInfo;
  const imgSrc = book.imageLinks ? book.imageLinks.thumbnail : emptyCover
  return (
    <div className={styles.bookPage}>
      <Link className={styles['back-button']} to='/'>Back</Link>
      <div className={styles["img-container"]}>
        <img src={imgSrc} alt={book.title} />
      </div>
      <h1>{book.title}</h1>
      {book.authors ? book.authors.map(author => <p key={author}>{author}</p>) : <p>Author is unknown</p>}
      <p>{book.description}</p>
    </div>
  );
};

export default BookPage;
