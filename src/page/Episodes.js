import React, { useEffect, useState } from 'react'
import CardEpisode from '../components/CardEpisode'

const Episodes = () => {
  const url = "https://rickandmortyapi.com/api"
  const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/episode`)
                const data = await response.json()
                console.log(data)
                setEpisodes(data.results)
                
            }catch(error){
                console.log('Error:' + error.message)
            }
        }
        http()
    }, [])
  return (
    <main>
        <section className='card-episode' >
            {
                episodes.map((item) => (
                  <CardEpisode key={item.id} episode={item} />
                    
                    ))
            }
        </section>
    </main>
  )
}

export default Episodes