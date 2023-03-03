import React, {useState, useEffect, useContext} from 'react'
import Card from './Card';
import Types from './Types';
import { PokemonContext } from './providers/PokeContext';


const ListPokemons = () => {

    const { pokemons, setPokemons,selecionado, setselected, tipos, setTipos, busqueda, setBusqueda} = useContext(PokemonContext)
    
    const buscar = (elemento) => {
      setBusqueda(elemento.target.value)
    }

    let results =[]
    !busqueda? results = pokemons :
   results  = pokemons.filter((dato) => dato.name.toString().toLowerCase().includes(busqueda.toLowerCase())
    )

   
  return (
    <div className='row' id='card' style={{padding:"5rem"}}>
    
      <div className='buscar'>
      <input type='text' placeholder='Buscar por nombre' onChange={buscar} value={busqueda}/>
        <Types tipos={tipos} setTipos={setTipos}/> 

        <select value={selecionado} name="" id="" onChange  ={e => setselected(e.target.value)}>
          <option value="">Buscar por tipo</option>
          {tipos.map((tipo) => (
          <option value={tipo.name}>{tipo.name}</option>
          
        )
          )}
        </select>
       
   


     
      </div>

      
      
      <h1>Lista pokemones</h1>

      {results.length == 0&& (<div className="alert alert-warning">No se encontraron pokemones</div>)}
      { results.map((pokemon) => (
        <Card pokemons={pokemon} selecionado={selecionado}/> 
       
      ))}
    </div>
  )
}

export default ListPokemons

