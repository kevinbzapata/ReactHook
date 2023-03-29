import { memo } from "react";

 

 
 export const Small =memo(( {value} ) => {

    console.log( 'me volvii a dibujar');

   return (
    <small> { value } </small>
   )
 })
 