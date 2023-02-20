import React, { useEffect, useState } from 'react'


const Types = ({setPokemons, pokemons}  ) => {

  const [poke, setPoke] = useState([]);
  const [selecionado, setselected] = useState('')
  const arr = [];
  const duplicados = []

  useEffect(() => {
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
  }, [selecionado]);


  useEffect(() => {
    if(selecionado) {
      const tiposFiltrados = poke.filter(pokemon => pokemon.types['0'].type.name ==selecionado)
      setPokemons(tiposFiltrados)
    }
  },[selecionado])

  


  return (
    <select value={selecionado} name="" id="" onChange  ={e => setselected(e.target.value)}>
        <option style={{textAlign:'center',}}value="" className='elegir'>--Buscar Por tipo---</option>
       
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
