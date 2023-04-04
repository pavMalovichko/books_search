import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ThemeProvider>
	</BrowserRouter>
)
