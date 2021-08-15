import styles from './BooksHolder.module.css'
import BookCard from './BookCard'

const BooksHolder = props => {
    const {books} = props
    return (
        <div className={styles.BooksHolder}>
            {books.map(book => <BookCard key={book.id} book={book} />)}
        </div>
    )
}

export default BooksHolder