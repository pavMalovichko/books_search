import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import BookStore, { IBooks } from '../store/BookStore'
import styles from './bookPage.module.scss'
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

const BookPage: React.FC = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const [book, setBook] = useState<IBooks>(BookStore.items.filter((book) => book.id === id)[0])

	return (
		<>
			<Button
				sx={{ margin: '40px 0px 0px 40px' }}
				variant="contained"
				onClick={() => navigate(-1)}>
				<ArrowBackIcon />
				Back
			</Button>
			<div className={styles.wrapper}>
				<div className={styles.image_container}>
					<img
						className={styles.image}
						src={book.image.thumbnail || book.image.noImg}
						alt={book.title}
					/>
				</div>
				<div className={styles.information_container}>
					<span className={styles.categories}>{book.categories.join(' / ')}</span>
					<h1 className={styles.title}>{book.title}</h1>
					<span className={styles.authors}>{book.authors.join(', ')}</span>
					<p className={styles.description}>{book.description}</p>
				</div>
			</div>
		</>
	)
}

export default BookPage
