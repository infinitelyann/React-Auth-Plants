import React from 'react'

const PlantUpdate = ({ plant, handleChange, handleUpdatePlant }) => {
	return (
		<>
			<input 
            type='text' 
            value={plant.name} 
            name='name' 
            onChange={handleChange} 
            />
			<input 
            type='text' 
            value={plant.type} 
            name='type' 
            onChange={handleChange} 
            />
			<button className="btn btn-outline-dark" onClick={handleUpdatePlant}>Update Plant</button>
		</>
	)
}

export default PlantUpdate