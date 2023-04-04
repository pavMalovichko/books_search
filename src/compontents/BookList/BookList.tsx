import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import BookStore, { IBooks } from '../../store/BookStore'
import BookCard from '../BookCard.tsx/BookCard'
import styles from './bookList.module.scss'
import Loader from '../Loader'
import NoBookFounded from '../Error/NoBookFounded'
import Error from '../Error/Error'
import Snackbar from '@mui/material/Snackbar'

type Props = {
	books: typeof BookStore
}

const BookList: React.FC<Props> = ({ books }) => {
	return (
		<>
			<div className={styles.search_info}>Found {books.totalCount} books</div>
			{books.status === 'error' && <Error />}
			{books.items.length === 0 && <NoBookFounded />}
			<div className={styles.container}>
				{books.status === 'pending' && (
					<>
						<Loader />
						<Loader />
						<Loader />
						<Loader />
						<Loader />
						<Loader />
						<Loader />
						<Loader />
					</>
				)}
				{(books.status === 'success' || books.items.length > 0) &&
					books.items.map((book: IBooks) => {
						return (
							<BookCard
								key={book.id}
								book={book}
							/>
						)
					})}
			</div>
		</>
	)
}

export default observer(BookList)
