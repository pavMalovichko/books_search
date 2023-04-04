// import { Box } from '@mui/material'
// import BookList from './compontents/BookList/BookList'
import Header from './compontents/Header/Header'
// import NextPageButton from './compontents/NextPageButton'
// import BookStore from './store/BookStore'
import SearchStore from './store/SearchStore'

import Router from './router/Router'

const App = () => {
	return (
		<div className="App">
			<Header searchStore={SearchStore} />
			<Router />
		</div>
	)
}

export default App
