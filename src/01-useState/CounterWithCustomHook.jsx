import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    // Custom Hook 
    const { contador , sumaOne , restaOne, setReset} = useCounter();

    return (
    <>
        <h1>Contador con Custom Hook : {contador}</h1>

        <hr />

        <button onClick={ () => sumaOne(2)}> +1 </button>

        <button onClick={ () => setReset()} > Reset</button>

        <button onClick={ () => restaOne(2)}> -1 </button>

    </>

  )
}
