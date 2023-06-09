import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const FormWithCustomHook = () => {

    const {formState , onInputChange, username , email, password, onReset}  = useForm({
        username: 'kzapata',
        email: 'kzapata@gmail.com',
        password: '*******'

    })

   

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
    <h1>Formulario con Custom Hook</h1>
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
    <input
         type="password" 
         className="form-control mt-2"
         placeholder="Contraseña"
         name="password"
         value={password}
         onChange={onInputChange}
    />

    <button className="btn btn-primary mt-4" onClick={ onReset }> Reset </button>



    
   

  </>
  )
}
