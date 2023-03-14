import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const url = "https://rickandmortyapi.com/api"
    const {id} = useParams()
    const [character, setCharacter] = useState([])
    

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/character/${id}`)
                const data = await response.json()
                console.log(data)
                setCharacter({...data})
                
            }catch(error){
                console.log('Error:' + error.message)
            }
        }
        http()
    }, [])

  return (
    <div className='character'>
        <h1>{character.name}</h1>
        <section className='content'>
            <div className='img-content'>
                <img src={character.image} alt="personagem" />
            </div>
            <div className='info-content'>
                <p className='character-status'>Status: {character.status === 'Alive' ? '🟢' + character.status : character.status === 'Dead' ? '🔴' + character.status : '🟠' + character.status}</p>
                <p>Gender: {character.gender}</p>
                <p>Species: {character.species}</p>
                {character.origin && <p>Origin: {character.origin.name}</p>}
                {character.location && <p>Location: {character.location.name}</p>}
                <p>Created: {character.created}</p>
            </div>
        </section>

    </div>
  )
}

export default Character