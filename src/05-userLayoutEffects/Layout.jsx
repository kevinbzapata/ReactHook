


import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter";
import { useLayoutEffect } from "react";





export const Layout = ( ) => {

    const { contador, sumaOne} = useCounter(1);

    const {data , isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${contador}`);

    // No puedo desestructurar algo si la data me viene por defecto en null
    //const {name , species} = {}
    //const {name , species} = false;
    //Cuando el api es un arreglo
    
    useLayoutEffect(() => {
    
        
    }, [])

  return (
   <>
    <h1>Breaking bad</h1>

    <hr />

    {
        (isLoading ) 
        ?(
        <div className="alert alert-info text-center">
                Loading...
        </div>
        ):(
        <blockquote 
        style={{display : 'flex'}}
        className="blockquote text-right">
        <p>{  data.name }</p>
        <br />
        <footer>{ data.species }</footer>
        </blockquote>)
    }



    <button className="btn btn-primary" 
    disabled = {isLoading}
    onClick= { () => sumaOne()  }> Siguiente Personaje</button>
    

   


    

   </>
  )
}
