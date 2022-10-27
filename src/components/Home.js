import React from 'react'
import { Navigate } from 'react-router-dom'


const Home = (props) => {
	const { user } = props
	if (user) {
		return(
			<Navigate to='/plants' />
		)
	}

	return (
		<>
			<h2>Welcome to the Garden!</h2>
			<p>Please sign up or login to see all the plants</p>
		</>
	)
}

export default Home