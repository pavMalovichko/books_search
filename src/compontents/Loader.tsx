import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader: React.FC = () => {
	return (
		<ContentLoader
			speed={2}
			width={300}
			height={350}
			viewBox="0 0 300 350"
			backgroundColor="#9c9c9c"
			foregroundColor="#ecebeb">
			<rect
				x="11"
				y="226"
				rx="3"
				ry="3"
				width="88"
				height="6"
			/>
			<rect
				x="10"
				y="257"
				rx="3"
				ry="3"
				width="270"
				height="6"
			/>
			<rect
				x="10"
				y="273"
				rx="3"
				ry="3"
				width="270"
				height="6"
			/>
			<rect
				x="10"
				y="289"
				rx="3"
				ry="3"
				width="178"
				height="6"
			/>
			<rect
				x="66"
				y="23"
				rx="0"
				ry="0"
				width="173"
				height="176"
			/>
			<rect
				x="10"
				y="324"
				rx="3"
				ry="3"
				width="88"
				height="6"
			/>
		</ContentLoader>
	)
}

export default Loader
