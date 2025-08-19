//rafc -> snippet para crear el componente funcional con flecha
import { useEffect, useState } from "react";

/* 
1- https://rickandmortyapi.com/api/character
2- https://thesimpsonsapi.com/api/characters
*/

export  const ListCharacters = () => {
    //Siempre que yo necesite una CAJA para GUARDAR ALGO voy a hacer un ESTADO
    const [listPjs, setListPjs] = useState([])

      // Las funciones adentro de un componente declarenlas con camelCase
  const peticionApi  = () => {
    //Peticion a una API
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //Necesito sacar esa data de aca adentro
        setListPjs(data.results)
    })
    .catch(error => console.error(error))
  }
  
  console.log(listPjs);
  

  //async function peticionApiAA(){}
  const  peticionApiAA = async () => {
    //Bloque de manejo de errores
    try{
    //Reemplazo al primer .then
    let response = await fetch('https://rickandmortyapi.com/api/character');
    //console.log(response);
    //Reemplazo para el segundo .then
    let data = await response.json();
    console.log(data);
    }catch(error) {
      console.error(error)
    }
  }

  //useEffect -> Cuando necesito cargar datos apenas se vaya a montar el componente

  useEffect( () => {
    
    peticionApi()

  },[] )

  return (
    <div>
    ListCharacters
            
    </div>
  )
}
