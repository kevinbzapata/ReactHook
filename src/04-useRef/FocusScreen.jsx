import { useRef } from "react"


export const FocusScreen = () => {

const inputRef = useRef();



 const onFocus = () => {
    //console.log(inputRef);
    inputRef.current.select();
 }

  return (
    <>
        <h1>Focus Scren</h1>
        <input 
        ref = {inputRef}
        type="text"
        placeholder="Ingrese cual quier cosa" 
        className="form-control"
        />

        <button
        className="btn btn-primary mt-4"
        onClick={  onFocus}
        > Set focus</button>
    </>
  )
}
