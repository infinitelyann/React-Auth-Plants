import React from 'react'
import { Navigate } from 'react-router-dom'
// import { Card } from 'react-bootstrap'



const Home = (props) => {
	const { user } = props
	if (user) {
		return(
			<Navigate to='/plants' />
		)
	}

	return (
		<>
		<style>{'body{background-image: url(https://i.imgur.com/ScMjDxj.jpg); background-size: cover}'}</style>
		
		<div className='container-sm' >
			<div className='welcome'>
			<h1>
			Welcome to the Garden!
			</h1>
			<h4>
			Please sign up or login to see all the plants

			</h4>
				
		
			</div>

		</div>	
			
	
		</>
	)
}

export default Home