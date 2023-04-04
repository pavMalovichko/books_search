import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import styles from './header.module.scss'
import { InputLabel, MenuItem, Select } from '@mui/material'
import SearchStore, { ISearch } from '../../store/SearchStore'
import { useNavigate } from 'react-router-dom'

type Props = {
	searchStore: typeof SearchStore
}

const Header: React.FC<Props> = ({ searchStore }) => {
	const [category, setCategory] = useState<string>('all')
	const [orderBy, setOrderBy] = useState<string>('relevance')
	const [search, setSearch] = useState<string>('')

	const navigate = useNavigate()

	const onClickSearch = () => {
		const query: ISearch = { search, category, orderBy, maxResults: 30, startIndex: 0 }
		searchStore.setSearchQuery(query)
		navigate('/')
	}
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div>
					<TextField
						className={styles.input}
						size="small"
						label="Find book"
						color="primary"
						placeholder="Enter book title..."
						value={search}
						onKeyUp={(e) => (e.key === 'Enter' ? onClickSearch() : null)}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<Button
						variant="contained"
						color="secondary"
						size="large"
						onClick={() => onClickSearch()}>
						<SearchIcon />
					</Button>
				</div>

				<div className={styles.fields}>
					<div>
						<InputLabel id="categoryLabel">Category</InputLabel>
						<Select
							labelId="categoryLabel"
							label="Category"
							variant="standard"
							value={category}
							onChange={(e) => setCategory(e.target.value)}>
							<MenuItem value="all">All</MenuItem>
							<MenuItem value="art">Art</MenuItem>
							<MenuItem value="biography">Biography</MenuItem>
							<MenuItem value="computers">Computers</MenuItem>
							<MenuItem value="history">History</MenuItem>
							<MenuItem value="medical">Medical</MenuItem>
							<MenuItem value="poetry">Poetry</MenuItem>
						</Select>
					</div>
					<div>
						<InputLabel id="orderLabel">Order</InputLabel>
						<Select
							labelId="orderLabel"
							value={orderBy}
							label="Order"
							variant="standard"
							onChange={(e) => setOrderBy(e.target.value)}>
							<MenuItem value="relevance">Relevance</MenuItem>
							<MenuItem value="newest">Newest</MenuItem>
						</Select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
