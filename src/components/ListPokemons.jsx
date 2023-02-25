import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card';
import Types from './Types';


const ListPokemons = () => {


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

   
    
    
    const buscar = (elemento) => {
      setBusqueda(elemento.target.value)
    }

    let results =[]
    !busqueda? results = pokemons :
   results  = pokemons.filter((dato) => dato.name.toString().toLowerCase().includes(busqueda.toLowerCase())
    )
    

   

    useEffect((e) => {
      if(selecionado!= '' ) {
        setBusqueda('')
        
    }

       getPokemons()
     
    },[selecionado])
    

const filtrarTipo = (elTipo) => {
console.log('El tipo:', elTipo);
}
    
     
   
  return (
    <div className='row' id='card' style={{padding:"5rem"}}>
    
      <div className='buscar'>
      <input type='text' placeholder='Buscar' onChange={buscar} value={busqueda}/>
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
      { results.map((pokemon) => (
        <Card pokemons={pokemon} selecionado={selecionado}/> 
       
      ))}
    </div>
  )
}

export default ListPokemons

