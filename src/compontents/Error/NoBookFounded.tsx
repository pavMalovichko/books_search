import React from 'react'
import styles from './error.module.scss'
const NoBookFounded: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.text}>No books here :(</p>
		</div>
	)
}

export default NoBookFounded
