import React, { useState } from 'react' 
import { plantCreate } from '../api/plant'

const PlantCreate = ({ user, msgAlert }) => {

    const defaultPlant = {
        name: '',
        type: ''
    }

    const [plant, setPlant] = useState(defaultPlant)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current plant
        // then comma and modify the key to the value you need
        setPlant({...plant, [event.target.name]: event.target.value})
    }

    const handleCreatePlant = () => {
        plantCreate(plant, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Plant',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Plant Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
			<>
            <form>

                
            </form>
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
                {/* <input
					type='checkbox'
					value={plant.edible}
					name='type'
					onChange={handleChange}
				/> */}
				<button onClick={handleCreatePlant}>Create Plant</button>
			</>
		)
}

export default PlantCreate