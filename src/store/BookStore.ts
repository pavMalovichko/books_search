import { makeAutoObservable } from 'mobx'
import { getAll } from '../services/books'
import SearchStore, { ISearch } from './SearchStore'
import noImg from '../assets/images/no_img.png'

export interface IBooks {
	id: string
	title: string
	categories: string[]
	authors: string[]
	description: string
	image: BookImages
}
type BookImages = {
	smallThumbnail?: string
	thumbnail?: string
	noImg?: string
}
enum Status {
	ERROR = 'error',
	SUCCESS = 'success',
	PENDING = 'pending',
	EMPTY = 'empty',
	FALSE_EMPTY = 'false_empty',
}
class Books {
	items: IBooks[] = []
	status: Status = Status.PENDING
	currentCount: number = 0
	totalCount: number = 0

	constructor() {
		makeAutoObservable(this)
		if (localStorage.getItem('booksData')) {
			const booksData = JSON.parse(localStorage.getItem('booksData') as string)
			this.items = booksData.items
			this.status = Status.SUCCESS
			this.currentCount = booksData.currentCount
			this.totalCount = booksData.totalCount
		} else {
			this.fetchBooks({ search: '', category: 'all', orderBy: 'relevance', maxResults: 40, startIndex: 0 })
		}
	}

	fetchBooks({ search, category, orderBy, maxResults, startIndex }: ISearch) {
		this.status = Status.PENDING
		let q = category === 'all' ? 'all' : `subject:${category}`
		if (search.trim() !== '') {
			q = `${search.trim()}+${q}`
		}
		getAll({ q, orderBy, maxResults, startIndex })
			.then((item) => {
				this.fetchBooksSucces(item)
			})
			.catch((err) => {
				this.fetchBooksError(err)
			})
	}
	fetchBooksSucces(item: any) {
		if (SearchStore.query.startIndex === 0) {
			this.items = []
			this.totalCount = 0
			this.currentCount = 0
		}
		if (!item.data.items && this.totalCount > 0) return (this.status = Status.FALSE_EMPTY)
		if (!item.data.items) return (this.status = Status.EMPTY)
		item.data.items.map((elem: any) => {
			const book = {
				id: elem.id as string,
				title: (elem.volumeInfo?.title as string) || '',
				categories: (elem.volumeInfo?.categories as string[]) || [''],
				authors: (elem.volumeInfo?.authors as string[]) || [''],
				description: (elem.volumeInfo?.description as string) || '',
				image: (elem.volumeInfo?.imageLinks as BookImages) || { noImg },
			}

			book.image.thumbnail ? (book.image.thumbnail = book.image.thumbnail?.replace('zoom=1', 'zoom=10')) : null
			this.items = [...this.items, book as IBooks]
		})
		this.status = Status.SUCCESS
		this.totalCount = item.data.totalItems
		this.currentCount = this.items.length
		const localData = JSON.stringify({ status: this.status, totalCount: this.totalCount, currentCount: this.currentCount, items: this.items })
		localStorage.setItem('booksData', localData)
	}
	fetchBooksError(err: any) {
		this.status = Status.ERROR
	}
}

export default new Books()
