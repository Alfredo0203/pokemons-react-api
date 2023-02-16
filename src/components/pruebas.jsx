import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Card = ({pokemons}) => {
    const [pokeInfo, setPokeinfo] = useState ({
        name : "",
        sprites : {front_default: ""}
    
      })

      useEffect (()=> {
        getPokemon(pokemons.url)
    })

    const getPokemon = (url) => {
      axios.get(url)
      .then((respuesta) => {setPokeinfo(respuesta.data)})
    }

  return (
    <div className="card text-center" style={{ width: "600px", backgroundColor: "#FFF0F0", alignItems: "center"}}>
    <div className="card-header" style={{ width: "100%" }}> {pokeInfo.name} </div>
    <div className="card-body">
      <img src={pokeInfo.sprites.front_default} alt="poke-imagen" />
    </div>
  </div>
  )
}

export default Card