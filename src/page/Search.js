import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Components
import CardCharacter from '../components/CardCharacter'
import CardEpisode from '../components/CardEpisode'
import CardLocation from '../components/CardLocation'


const Search = () => {
    const {search} = useParams()
    const url = "https://rickandmortyapi.com/api"
    const [characters, setCharacters] = useState([])
    const [episode, setEpisode] = useState([])
    const [location, setLocation] = useState([])

    useEffect(() => {
        const requests = async () => {

          // Characters
            let response = await fetch(`${url}/character`)
            let data = await response.json()
            const lista = data.results
            const array = lista.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            console.log(array)
            
            setCharacters(array)

          // Episodes
            response = await fetch(`${url}/episode`)
            data = await response.json()
            const lista2 = data.results
            const arrEpisodes = lista2.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()))
            console.log(arrEpisodes)

            setEpisode(arrEpisodes)

          // Location
          response = await fetch(`${url}/location`)
          data = await response.json()
          const lista3 = data.results
          const arrLocation = lista3.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()))
          console.log(arrLocation)

          setLocation(arrLocation)
        }
        requests()
    }, [search])
  return (
    <div>
        <h2>{search}</h2>
        <h3>Characters</h3>
        <main className='characters'>
          {
            characters.length > 0
            ?
                <section className='card-character' >
                    {
                        characters.map((item) => (
                            <CardCharacter key={item.id} character={item} />
                            ))
                    }
                </section>
            :
                <p className='list-notfound'>404, Not Found</p>

          }
        </main>
        <h3>Location</h3>
        <main className='location'>
          {
            location.length > 0
            ?
                <section className='card-location' >
                    {
                        location.map((item) => (
                            <CardLocation key={item.id} location={item}/>
                            ))
                    }
                </section>
            :
                <p className='list-notfound'>404, Not Found</p>

          }
        </main>
        <h3>Episode</h3>
          <main className="episode">
            {
              episode.length > 0
              ?
                  <section className="card-episode">
                      {
                          episode.map((item) => (
                            <CardEpisode key={item.id} episode={item} />
                          ))
                      }
                  </section>
              : 
                  <p className='list-notfound'>404, Not Found</p>
            }
          </main>
    </div>
  )
}

export default Search