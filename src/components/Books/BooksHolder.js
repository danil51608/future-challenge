import styles from './BooksHolder.module.css'
import BookCard from './BookCard'
import {useSelector} from 'react-redux'

const BooksHolder = props => {
    const books = useSelector(state => state.books)
    return (
        <div className={styles.BooksHolder}>
            {books.items ? books.items.map(book => <BookCard key={book.id} book={book} />) : books.totalItems == 0 ? <h1>Nothing have been found</h1> : null}
        </div>
    )
}

export default BooksHolder