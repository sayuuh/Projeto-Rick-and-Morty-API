import React from 'react'

const CardLocation = ({location}) => {
  return (
    <div>
        <h3>{location.name}</h3>
        <p>{location.dimension}</p>
        <p>{location.type}</p>
        <p>{location.created}</p>
    </div>
  )
}

export default CardLocation