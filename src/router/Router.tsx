import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import BookPage from '../pages/BookPage'
import MainPage from '../pages/MainPage'

const Router: React.FC = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainPage />}
			/>
			<Route
				path="/book/:id"
				element={<BookPage />}
			/>
		</Routes>
	)
}

export default Router
