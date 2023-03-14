import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardEpisode = ({episode}) => {
  const navigate = useNavigate()
  const seeMore = (id) => {
    navigate(`/episode/${id}`)
  }
  return (
    <div className='card-episode' onClick={() => seeMore(episode.id)} >
        
        <h3>Episode: {episode.episode}</h3>
        <p>Name: {episode.name}</p>
        <p>Released: {episode.air_date}</p>
       
    </div>
  )
}

export default CardEpisode