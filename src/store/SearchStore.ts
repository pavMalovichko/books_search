import { makeAutoObservable } from 'mobx'
import BookStore from './BookStore'

export interface ISearch {
	search: string
	category: string
	orderBy: string
	maxResults: number
	startIndex: number
}

class SearchQuery {
	query: ISearch = {
		search: '',
		category: 'all',
		orderBy: 'relevance',
		maxResults: 30,
		startIndex: 0,
	}

	constructor() {
		makeAutoObservable(this)
	}

	setSearchQuery(newQuery: ISearch) {
		this.query = newQuery
		BookStore.fetchBooks(this.query)
	}
	getNextPage() {
		this.query.startIndex += 30
		BookStore.fetchBooks(this.query)
	}
}

export default new SearchQuery()
