import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { plantShow, plantUpdate, plantDelete } from "../api/plant";
import PlantUpdate from "./PlantUpdate";

const PlantShow = ({ user, msgAlert}) => {

    const [plant, setPlant] = useState({})

    const { id } = useParams()
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    // const [isDeleteShown, setIsDeleteShown] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        plantShow(user, id)
        .then((res) => {
            console.log('this is the data', res.data)
            setPlant(res.data.plant)
        })
        .catch((error) => {
            console.log('this is the user and the id', user, id)
            msgAlert({
                heading: 'Failure',
                message: 'Show Plant Failure' + error,
                variant: 'danger'
            })
        })
    },[])


    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current plant
        // then comma and modify the key to the value you need
        setPlant({...plant, [event.target.name]: event.target.value})
    }

    const handleUpdatePlant = () => {
        plantUpdate(plant, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Update Plant',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Plant Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeletePlant = () => {
        plantDelete(user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Delete Plant Success',
                variant: 'success'
            })
            navigate('/plants')
        })
      
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Delete Plant Failure' + error,
                variant: 'danger'
            })
        })
    }

    return(
        <>
            <h3>Name: {plant.name}</h3>
            <p>Type: {plant.type}</p>
            <button onClick={toggleShowUpdate}>Update</button>
            {isUpdateShown && (
                <PlantUpdate plant={plant}
                    handleChange={handleChange}
                    handleUpdatePlant={handleUpdatePlant}
                />
            )}
            <button onClick={handleDeletePlant}>Delete</button>
        </>
    )
}

export default PlantShow 