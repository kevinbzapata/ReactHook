import { useState } from "react"
import { ShowIncremet } from "./ShowIncremet"
import { useCallback } from "react"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
     (valor) => {
       
        setCounter( (contador) => contador + valor);
     },
     [],
   )
   
    


    // const incrementFather = () => {
    //     setCounter(counter  + 1 );
    // }

  return (
   <>
   
    <h1>Use Callback {counter}</h1>
    <hr />

    <ShowIncremet increment={ incrementFather }/>

   </>
  )
}
