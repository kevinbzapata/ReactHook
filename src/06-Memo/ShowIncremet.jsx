import { memo } from "react";




export const ShowIncremet = memo(( {increment}) => {

    console.log('me genere');
  

  return (
   <button 
   className="btn btn-outline-primary"
   onClick={ () => {
        increment(5);
   }}
   > Incrementar</button>
  )
})
