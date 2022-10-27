import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { plantIndex } from '../api/plant'

const PlantIndex = ({ user, msgAlert }) => {

    const [allPlants, setAllPlants] = useState([])
    // const [edible, setEdible] = useState(false)


    useEffect(() => {
        plantIndex(user)
        .then(res => {
            setAllPlants(res.data.plants)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Plants Failure' + error,
                variant: 'danger'
            })
        })
    }, [user, msgAlert])

    const allPlantsJSX = allPlants.map(plant => {
        return (

            <Link to={plant._id} key={plant._id} style={{ textDecoration: 'none', color: 'black'}}>
                <div className='card' style={{ backgroundColor: plant.color }}>
                <div className='card-body'>
                    <h3 className='card-title'>{plant.name}</h3>
                    {/* <p>{plant.edible}</p> */}
                     <p> {plant.type} </p> 

                     </div>

                </div>
          
            </Link>
        )
    })

    return (
        <>
            <ul>{allPlantsJSX}</ul>
        </>
    )
}

export default PlantIndex