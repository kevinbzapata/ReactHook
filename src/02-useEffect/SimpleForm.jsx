import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'kzapata',
        email: 'kzapata@gmail.com'
    })

    const {username , email} = formState;

    const onInputChange = ({target}) => {
        const {name , value} = target;
            setformState({
                ...formState,
                [ name ] : value
            }
        )
    }

    // USE EFFECT , sirve para disparar efectos secundarios
    // un arreglo vacio hace que solo se ejecute una vez 
    // Es mejor tener separado los disparadores 

    useEffect(() => {
       // console.log('se llamo el use efffect');
     }, []);

     useEffect(() => {
      //  console.log('se cambio el formulario');
     }, [formState]);

     useEffect(() => {
      //  console.log('se cambio el email');
     }, [email]);
     

  return (
  <>
    <h1>Formulario Simple</h1>
    <hr />

    <input
         type="text" 
         className="form-control"
         placeholder="Usuario"
         name="username"
         value={username} 
         onChange={onInputChange}
    />
    <input
         type="text" 
         className="form-control mt-2"
         placeholder="Email"
         name="email"
         value={email}
         onChange={onInputChange}
    />



    {

        ( username === 'kzapata') &&  <Message />
    }
   

  </>
  )
}
