import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
    const {search} = useParams()
    const url = "https://rickandmortyapi.com/api"
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const requests = async () => {
            const response = await fetch(`${url}/character`)
            const data = await response.json()
            // const array = data.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()))
            // console.log(array)
            setCharacters(data.results)
        }
        requests()
    }, [])
  return (
    <div>
        search {search}
    </div>
  )
}

export default Search