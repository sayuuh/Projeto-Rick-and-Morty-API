import React, { useEffect, useState } from 'react'
import CardCharacter from '../components/CardCharacter'

const Characters = () => {
    const url = "https://rickandmortyapi.com/api"
    const [characters, setCharacters] = useState([])
    const [next, setNext] = useState([])
    const [prev, setPrev] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/character`)
                const data = await response.json()
                console.log(data)
                setCharacters(data.results)
                setNext(data.info.next)
                setPrev(data.info.prev)
                console.log(data.info.next)

            }catch(error){
                console.log('Error:' + error.message)
            }
        }
        http()
    }, [])

    const btnNext = () => {
        const http = async () => {
            try{
                const response = await fetch(`${next}`)
                const data = await response.json()
                console.log(data)
                setCharacters(data.results)
                setNext(data.info.next)
                setPrev(data.info.prev)

            }catch(error){
                console.log('Error:' + error.message)
            }
        }
        http()
    }

    const btnPrev = () => {
        const http = async () => {
            try{
                const response = await fetch(`${prev}`)
                const data = await response.json()
                console.log(data)
                setCharacters(data.results)
                setNext(data.info.next)
                setPrev(data.info.prev)

            }catch(error){
                console.log('Error:' + error.message)
            }
        }
        http()
    }
    
  return (
    <main className='characters'>
        <section className='card-character' >
            {
                characters.map((item) => (
                    <CardCharacter key={item.id} character={item} />
                    ))
            }
        </section>
        <section>
            {
                prev && <button onClick={() => btnPrev()}>🔙</button>
            }
            {
                !prev && <button disabled>🔙</button>
            }
            {
                next && <button onClick={() => btnNext()}>🔜</button>
            }
            {
                !next && <button disabled>🔜</button>
            }
        </section>
    </main>
  )
}

export default Characters