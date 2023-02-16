import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card';

const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [busqueda, setBusqueda] = useState('')
    const [pokemonsTable, setPokemonsTable] = useState([]);
    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30')
        .then((response) => {
            setPokemons(response.data.results);
            setPokemonsTable(response.data.results)
            console.log(pokemons)
        })
        
    }
    
    const buscar = (elemento) => {
      setBusqueda(elemento.target.value)
      filtrarBusqueda(elemento.target.value)
    }

    const filtrarBusqueda = (terminoBusqueda) => {
      const datoEncontrado = pokemonsTable.filter((dato) => {
        if(dato.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
          return dato
        }
      })
      setPokemons(datoEncontrado)
    }

    useEffect(() => {
        getPokemons()
    },[])
  return (
    <div className='row' id='card' style={{padding:"5rem"}}>
      <input type='text' placeholder='Buscar' onChange={buscar} value={busqueda}/>
      <h1>Lista pokemones</h1>
      { pokemons.map((pokemon) => (
        <Card pokemons={pokemon}/>   
      ))}
    </div>
  )
}

export default ListPokemons

