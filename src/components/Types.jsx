import {useState, useEffect } from "react";


const Types =({tipos, setTipos}) => {

 
 const fetchApi = async  () => {


    let res = await fetch("https://pokeapi.co/api/v2/type");
    let datos = await res.json();
    const resultados = datos.results;
    setTipos(resultados);
   
  }
 
  useEffect(() => {
  fetchApi()
  
  },[])
   
     
    return (
      <>
     
      </>
    )
  }

  export default Types;
