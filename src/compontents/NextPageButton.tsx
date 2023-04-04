import { Button, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchStore from '../store/SearchStore'
import { observer } from 'mobx-react-lite'
import BookStore from '../store/BookStore'

type Props = {
	search: typeof SearchStore
	books: typeof BookStore
}
type Notification = {
	isOpen: boolean
	message: string
}
const NextPageButton: React.FC<Props> = ({ search, books }) => {
	const [notification, setNotification] = useState<Notification>({
		isOpen: false,
		message: '',
	})
	useEffect(() => {
		if (books.status === 'false_empty') {
			setNotification({
				isOpen: true,
				message: 'No more books',
			})
		}
	}, [books.status])

	return (
		<>
			{books.currentCount + 30 <= books.totalCount && books.status === 'success' && (
				<Button
					variant="contained"
					onClick={() => search.getNextPage()}>
					Load more
				</Button>
			)}
			{books.status === 'false_empty' && (
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					open={notification.isOpen}
					onClose={() => {
						setNotification({
							isOpen: false,
							message: '',
						})
					}}
					autoHideDuration={3000}
					message="No more books"
					key={'snackbar_err'}
				/>
			)}
		</>
	)
}

export default observer(NextPageButton)
