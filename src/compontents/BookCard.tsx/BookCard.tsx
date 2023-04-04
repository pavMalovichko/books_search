import React from 'react'
import { IBooks } from '../../store/BookStore'
import styles from './bookCard.module.scss'
import { Link } from 'react-router-dom'

type Props = {
	book: IBooks
}

const BookCard: React.FC<Props> = ({ book }) => {
	return (
		<Link to={`/book/${book.id}`}>
			<div className={styles.container}>
				<img
					className={styles.image}
					src={book.image.smallThumbnail || book.image.noImg}
					alt={book.title}
				/>
				<span className={styles.category}>{book.categories[0]}</span>
				<h3 className={styles.title}>{book.title}</h3>
				<span className={styles.author}>{book.authors.join(', ')}</span>
			</div>
		</Link>
	)
}

export default BookCard
