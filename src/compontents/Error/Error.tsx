import React from 'react'
import styles from './error.module.scss'
const Error: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.text}>I'm sorry, something gone wrong :(</p>
		</div>
	)
}

export default Error
