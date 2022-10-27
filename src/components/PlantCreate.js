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
                message: 'View in All Plants',
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
            <form style={{ padding: 50 }}>
                <div>
                    <h5>Whats the Name of your plant?</h5>
                    <input
                        type='text'
                        value={plant.name}
                        name='name'
                        onChange={handleChange}
                    />
                </div>
               
               <div>
                <h5>What color is your plant?</h5>
                    <input
                        type='color'
                        value={plant.color}
                        name='color'
                        onChange={handleChange}
                    />
               </div>
               <div>
                <h5>What Type of plant?</h5>
                    <p style={{ opacity: .5 }}>veggie? herb? flower?</p>
                    <input
                        type='text'
                        value={plant.type}
                        name='type'
                        onChange={handleChange}
                    />
               </div>
             
                 {/* <h5>Is your plant edible?</h5>
                <input
					type='checkbox'
					value={plant.edible}
					name='edible'
					onChange={handleChange}
				/> */}
              
                <hr/>
                </form>
				<button onClick={handleCreatePlant} className="btn btn-outline-dark" style={{ margin: 50 }}>Create Plant</button>
                
			</>
		)
}

export default PlantCreate