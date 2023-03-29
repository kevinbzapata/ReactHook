import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";


const heavyStuff = (iteraciones = 100) => {

  for ( let i = 0; i < iteraciones; i++){
      console.log(iteraciones);
  }


  return `${ iteraciones }  iteraciones `
}

export const MemorizeHook = () => {

    const { contador , sumaOne } = useCounter(500);

    const [show, setshow] = useState(true);

   const memorizedValue = useMemo( () => heavyStuff( contador ) , [   ])

  return (
    <>
        <h1> Counter <small> { contador  }</small>  </h1>

      <h4> { memorizedValue }</h4>

        <hr />

        <button
        className="btn btn-outline-primary"
        onClick={ () => sumaOne() }
        > +1</button>
    
        <button
        className="btn btn-outline-primary"
        onClick={ () => setshow(!show) } 
        >
            hide { JSON.stringify(show)}
        </button>
    </>
  )
}
