import React from 'react'
import { useParams } from 'react-router-dom'  
import boats from '../Cards/CardData'

const BoatDetails = () => {
    const { id } = useParams()
    const boat = boats.find((boat)=>boat.id === parseInt(`${id}`))
    return (
        <div>
            <p>{boat.name}</p>
        </div>
    )
}

export default BoatDetails
