import React, { useEffect, useState } from 'react'


const Types = ({setPokemons, selecionado, setselected}  ) => {

  const [poke, setPoke] = useState([]);

  const arr = [];
  const duplicados = []

  useEffect(() => {
 getPokemonsType()
  },[]);

  const getPokemonsType = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=30')
    .then((response) => response.json())
    .then((data) => 
      data.results.map((item) => {
        fetch(item.url)
          .then((response) => response.json())
          .then((allpokemon) => arr.push(allpokemon));
          setPoke(arr);
      }),
    );
  }

  useEffect(() => {
    if(selecionado=! '' && selecionado!= 'reset') {
      const tiposFiltrados = poke.filter(pokemon => pokemon.types['0'].type.name ==selecionado)
      setPokemons(tiposFiltrados)
    }
    if(selecionado == 'reset') {
      setselected('')
      setPokemons(arr)
    }
  },[selecionado])

  


  return (
    <select value={selecionado} name="" id="" onChange  ={e => setselected(e.target.value)}>
        <option style={{textAlign:'center',}}value="" className='elegir'>--Buscar Por tipo---</option>
        <option style={{textAlign:'center',}}value="reset" className='elegir'>--Reset Busqueda---</option>
       
    {poke.map((p) =>(

      p.types['0'].type.name != duplicados.filter(element => element == p.types['0'].type.name)? (
      duplicados.push(p.types['0'].type.name),
      <option value={p.types['0'].type.name}>{p.types['0'].type.name}</option>
      ) : (
        null
      )
      
        ))}
      
      </select>
  )
}

export default Types
