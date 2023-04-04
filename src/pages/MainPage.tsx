import React from 'react'
import { Box } from '@mui/material'
import BookList from '../compontents/BookList/BookList'
import Header from '../compontents/Header/Header'
import NextPageButton from '../compontents/NextPageButton'
import BookStore from '../store/BookStore'
import SearchStore from '../store/SearchStore'

const BookPage: React.FC = () => {
	return (
		<>
			<BookList books={BookStore} />
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '150px' }}>
				<NextPageButton
					search={SearchStore}
					books={BookStore}
				/>
			</Box>
		</>
	)
}

export default BookPage
