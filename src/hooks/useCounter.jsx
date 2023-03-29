
import { useState } from "react";

// Un HOOK es una funcion que tiene un return 



export const useCounter = ( valorInicial = 1) => {

    const [contador, setcontador] = useState(valorInicial)

    const sumaOne = ( value = 1 ) => {
        setcontador( contador + value );
    }

    const restaOne = ( value = 1 ) => {
        
        setcontador( contador - value);
    }

    const setReset = () => {
        setcontador( valorInicial );
    }

    return {
        contador,
        sumaOne,
        restaOne,
        setReset
    }
}