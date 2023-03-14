import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Episode = () => {
    const url = "https://rickandmortyapi.com/api"
    const {id} = useParams()
    const [episode, setEpisode] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/episode/${id}`)
                const data = await response.json()
                console.log(data)
                setEpisode({...data})
                
            }catch(error){
                console.log('Error:' + error.message)
            }
        }
        http()
    }, [])
  return (
    <div className='episode'>
        <div className="episode-info">
            <h3>Episode: {episode.episode}</h3>
            <p>Name: {episode.name}</p>
            <p>Released: {episode.air_date}</p>
            <p>URL: {episode.url}</p>
            <p>Created: {episode.created}</p>
        </div>
    </div>
  )
}

export default Episode