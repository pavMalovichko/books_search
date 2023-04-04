import axios from 'axios'

const API_KEY = 'AIzaSyCmPklfEc0jptZ-iXk9AhMcJChsTUfnpI0'
const API_URL = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}`

const request = async (params = {}) => {
	const response = await axios.get(`${API_URL}`, {
		params,
	})
	return response
}
export default request
