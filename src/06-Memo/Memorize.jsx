import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";



export const Memorize = () => {

    const { contador , sumaOne } = useCounter();

    const [show, setshow] = useState(true)

  return (
    <>
        <h1> Counter  <Small value = { contador } />  </h1>


        <hr />

        <button
        className="btn btn-primary"
        onClick={ () => sumaOne() }
        > +1</button>
    
        <button
        className="btn btn-primary"
        onClick={ () => setshow(!show) } 
        >
            hide { JSON.stringify(show)}
        </button>
    </>
  )
}
