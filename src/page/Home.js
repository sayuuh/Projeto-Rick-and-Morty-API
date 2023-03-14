import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import CardLocation from '../components/CardLocation'
import CardEpisode from '../components/CardEpisode'


const Home = () => {
    const url = "https://rickandmortyapi.com/api"
    const [characters, setCharacters] = useState([])
    const [episodes, setEpisodes] = useState([])
    const [locations, setLocations] = useState([])
    

    const httpRequest = async (url) => {
      try{
        const response = await fetch(url)
        const data = await response.json()
        return data
      }catch(error){
        console.log('Error: ' + error.message)
    }
  }
  
    function generateRandom(max){
      const min = 1
      let randomNumbers = []
      while(randomNumbers.length < 3){
        const randomNum = Math.floor(Math.random() * (max - min) + min)
          if(!randomNumbers.includes(randomNum)){
            randomNumbers.push(randomNum)
          }
      }
      return randomNumbers.sort()
    }
    
    useEffect(() => {
      const request = async () => {
        setCharacters(await httpRequest(`${url}/character/${generateRandom(826).toString()}`))
        setLocations(await httpRequest(`${url}/location/${generateRandom(126).toString()}`))
        setEpisodes(await httpRequest(`${url}/episode/${generateRandom(51).toString()}`))
      }
      request()
    }, [])

       
    return (
      <div className='main-div'>
        <h2>Characters</h2>
        <div className='characters-home'>
            {
              characters.map((item) => (
                <Card key={item.id} character={item} />                        
                ))
            }
        </div>
  
        <h2>Locations</h2>
        <div className='location-home'>
            {
              locations.map((item) => (
                <CardLocation key={item.id} location={item}  />
              ))
            }   
        </div>
  
        <h2>Episodes</h2>
        <div className='episode-home'>
            {
              episodes.map((item) => (
                <CardEpisode key={item.id} episode={item} />
              ))
            }   
        </div>
    </div>
    )
  }
  
  export default Home