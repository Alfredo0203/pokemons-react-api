

/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export default function PokeContext(props) {
    
  const [pokemons, setPokemons] = useState([]);
  const [busqueda, setBusqueda] = useState('')
  const [selecionado, setselected] = useState('')
  const [tipos, setTipos] = useState([]);

     
  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100')
    .then((response) => {
      
        setPokemons(response.data.results);
        
    })
    
}


useEffect((e) => {
  if(selecionado!= '' ) {
    setBusqueda('')
    
}

   getPokemons()
 
},[selecionado]) 


  return (
    <PokemonContext.Provider 
      value = {{
        pokemons,
    setPokemons,
    selecionado,
    setselected,
    tipos,
    setTipos,
    busqueda, setBusqueda 
    }}>
        {props.children}
    </PokemonContext.Provider>
  )
}
 export const PokemonContext = createContext()

