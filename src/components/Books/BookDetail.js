import { useLocation, Link } from "react-router-dom";
import styles from "./BookDetail.module.css";
import Backdrop from "../UI/Backdrop";
import emptyCover from "../../Assets/empty_cover.png";

const BookDetail = (props) => {
  const data = useLocation();
  const book = data.state.book.volumeInfo;
  const imgSrc = book.imageLinks ? book.imageLinks.thumbnail : emptyCover;

  return (
    <Backdrop>
      <div className={styles.body}>
        <div className={styles["img-container"]}>
          <img src={imgSrc} alt={book.title} />
        </div>
        <div className={styles.mainInfo}>
          {book.categories ? <h2>Category: {book.categories[0]}</h2> : null}
          <h1>{book.title}</h1>

          <h2>
            Authors: 
            {book.authors ? (
              book.authors.map((author) => (
                <h2 key={author}>{author}</h2>
              ))
            ) : (
              <p>Author is unknown</p>
            )}
          </h2>

          <div className={styles.description}>

            {book.description ? (
              <p>Description: {book.description}</p>
            ) : (
              <p>No description</p>
            )}
            
          </div>

        </div>
        <Link className={styles.close} to="/"></Link>
      </div>
    </Backdrop>
  );
};

export default BookDetail;
