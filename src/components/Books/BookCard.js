import styles from "./BookCard.module.css";
import emptyCover from '../../Assets/empty_cover.jpg';

const BookCard = (props) => {
  const info = props.book.volumeInfo;
  const imgSrc = info.imageLinks ? info.imageLinks.smallThumbnail : emptyCover
  return (
    <div className={styles["card-body"]}>
      <div className={styles['img-container']}>
        <img src={imgSrc} alt={info.title} />
      </div>
      <div className={styles['main-info']}>
        <h1>{info.title}</h1>
        {info.categories ? <h2>{info.categories[0]}</h2> : null}
        {info.authors ? info.authors.map(author => <p key={author}>{author}</p>) : <p>Author is unknown</p>}
      </div>
    </div>
  );
};

export default BookCard;
