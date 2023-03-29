import { useEffect, useState } from "react"
import { useCounter } from "../hooks/useCounter";


export const useFetch = ( url ) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
       
    })
    
    const { data , isLoading , hasError} = state

    const getApi = async () => {

        setState({ 
            ...state,
            isLoading: true
        });

        const resp = await fetch( url );
        const data = await resp.json();

        

        setState({
            data,
            isLoading: false,
            hasError : null
        });

    }
    
    useEffect(() => {
        getApi();
      
    }, [url])
    

    // Llamar Iscounter 

   
  
    
    

    return{
        data,
        isLoading,
        hasError,
      
        
    }
}
