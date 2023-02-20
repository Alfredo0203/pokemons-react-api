import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card';
import Types from './Types';


const ListPokemons = () => {


    const [pokemons, setPokemons] = useState([]);
    const [busqueda, setBusqueda] = useState('')
    const [pokemonsTable, setPokemonsTable] = useState([]);
    const [selecionado, setselected] = useState('')
    
    
    
    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=30')
        .then((response) => {
          
            setPokemons(response.data.results);
            setPokemonsTable(response.data.results)
            
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

   

    useEffect((e) => {
      if(selecionado!= '' ) {
        setBusqueda('')
        
    }

       getPokemons()
     
    },[selecionado])
    


    
     
   
  return (
    <div className='row' id='card' style={{padding:"5rem"}}>
    
      <div className='buscar'>
      <input type='text' placeholder='Buscar' onChange={buscar} value={busqueda}/>
      
    {
       <Types 
       setPokemons={setPokemons}
       pokemons={pokemons}
       selecionado={selecionado}
       setselected={setselected}
    /> 
        
       
       }
     
      </div>

      
      
      <h1>Lista pokemones</h1>
      { pokemons.map((pokemon) => (
        <Card pokemons={pokemon} selecionado={selecionado}/> 
       
      ))}
    </div>
  )
}

export default ListPokemons

