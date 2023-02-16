import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Card = ({pokemons}) => {
    const [pokeData, setPokeData] = useState('')
    const [pokeSprites, setPokeSprites] = useState('')

    const getPokemosByUrl = (url) => {
        axios.get(url)
        .then((response) => {
            setPokeData(response.data)
            setPokeSprites(response.data.sprites)
        })
    }

    useEffect(() => {
        getPokemosByUrl(pokemons.url)
    })
  return (

    <div className='col-md-4' >

    <div className='card mt-4'>
      <div className='card-header'>
          <b>{pokeData.name}</b>
          </div>
          <img src={pokeSprites.front_default} alt="" width={200} />
          
          <div className='card-body'>
            <p><span>Id: </span>{pokeData.id}</p>
            <p><span>Height: </span>{pokeData.height}</p>
            <p><span>Weight:</span> {pokeData.weight}</p>
            <p><span>Especies:</span> {pokeData.name}</p>
          </div>
      </div>

  </div>
      

  )
}

export default Card
