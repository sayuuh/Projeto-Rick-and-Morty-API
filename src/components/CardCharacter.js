import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardCharacter = ({character}) => {

    const navigate = useNavigate()
    const seeMore = (id) => {
        navigate(`/character/${id}`)
    }

  return (
    <div onClick={() => seeMore(character.id)}>
        <div className='image'>
            <img src={character.image} alt="personagem" />
        </div>
        <div className='info-character'>
            <h3>{character.name}</h3>
            <p>{character.origin.name}</p>
            <p className='character-status'>Status: {character.status === 'Alive' ? '🟢' + character.status : character.status === 'Dead' ? '🔴' + character.status : '🟠' + character.status}</p>
        </div>
    </div>
  )
}

export default CardCharacter