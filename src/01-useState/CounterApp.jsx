import { useState } from "react"



export const CounterApp = () => {

//Usamos use estate para mostrar el valor del contador 


// Puedo desestructurar el objeto de useState o a su vez 
// mandar el objeto y desestrucutrarlo abajo
 //const [{contador1 , contador2 , contador3}, setcontador] = useState({

 const [contador, setcontador] = useState({
    contador1 : 10,
    contador2 : 20,
    contador3 : 30,
 })

 const { contador1, contador2, contador3} = contador;

  return (
    <>
    <h1>Counter: {contador1}</h1>
    <h1>Counter: {contador2}</h1>
    <h1>Counter: {contador3}</h1>

    <hr />

    <button 
    onClick={ () => 
    setcontador( {
        ...contador,
        contador1: contador1 + 1

    }
        
        )
    }
    > +1 </button>
    </>
  )
}
