import React, { useEffect, useState } from 'react'
import CardLocation from '../components/CardLocation'


const Locations = () => {
  const url = "https://rickandmortyapi.com/api"
  const [locations, setLocations] = useState([])
  const [next, setNext] = useState([])
  const [prev, setPrev] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/location`)
                const data = await response.json()
                console.log(data)
                setLocations(data.results)
                setNext(data.info.next)
                setPrev(data.info.prev)
                
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
              setLocations(data.results)
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
              setLocations(data.results)
              setNext(data.info.next)
              setPrev(data.info.prev)

          }catch(error){
              console.log('Error:' + error.message)
          }
      }
      http()
  }
  return (
    <main className='locations'>
        <section className='box-location' >
            {
                locations.map((item, i) => (
                  <CardLocation key={item.id} location={item} />
                    
                    ))
            }
        </section>
        <section className='button'>
            {
                prev && <button onClick={() => btnPrev()}>
                    <img src="https://cdn-icons-png.flaticon.com/512/137/137531.png" alt="back" />
                </button>
            }
            {
                !prev && <button disabled>
                    <img src="https://cdn-icons-png.flaticon.com/512/137/137531.png" alt="back" />
                </button>
            }
            {
                next && <button onClick={() => btnNext()}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2161/2161524.png" alt="next" />
                </button>
            }
            {
                !next && <button disabled>
                    <img src="https://cdn-icons-png.flaticon.com/512/2161/2161524.png" alt="next" />
                </button>
            }
        </section>
    </main>
  )
}

export default Locations