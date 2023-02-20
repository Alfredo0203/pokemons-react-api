import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card';
import Types from './Types';

const ListPokemons = () => {
  let pokemonsTypeArray = ['Normal',' Fire', 'Water','Grass', 'Electric','Ice','Fighting','Poison', 
  'Ground','Psychic','Bug','Rock', 'Ghost', 'Dark','Dragon','Steel','Fairy']

    const [pokemons, setPokemons] = useState([]);
    const [busqueda, setBusqueda] = useState('')
    const [pokemonsTable, setPokemonsTable] = useState([]);
    const [pokeType, setPokeType] = useState([]) 
    const [mostrarSelect, setSelect] = useState(false)
    
    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=30')
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

    const SelectType =(tipo) =>{
      setSelect(true)
      setselected(tipo.toString())
      console.log(tipo)
      
    }
    
     
   
  return (
    <div className='row' id='card' style={{padding:"5rem"}}>
    
      <div className='buscar'>
      <input type='text' placeholder='Buscar' onChange={buscar} value={busqueda}/>
      
    {
        mostrarSelect==true? (
       <Types 
       setPokemons={setPokemons}
       pokemons={pokemons}
    />  

        ) : (<Types
          setPokemons={setPokemons}
          pokemons={pokemons}
         /> )
        
       
       }
     
      </div>

      
      
      <h1>Lista pokemones</h1>
      { pokemons.map((pokemon) => (
        <Card pokemons={pokemon} setPokemons={setPokemons} setPokemonsTable={setPokemonsTable}/> 
       
      ))}
    </div>
  )
}

export default ListPokemons

