import React from 'react'

const CardEpisode = ({episode}) => {
  return (
    <div>
        <h3>Episode: {episode.episode}</h3>
        <p>Name: {episode.name}</p>
        <p>Released: {episode.air_date}</p>
       
    </div>
  )
}

export default CardEpisode