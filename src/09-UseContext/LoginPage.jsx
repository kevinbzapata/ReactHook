import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user , hola} = useContext( UserContext);
  //console.log(algo);  

  

  return (
    <>
    <h1>LoginPage</h1>
    <hr />

    <pre> 
      {
        JSON.stringify(user, null, 10)
      }

    </pre>

    <button>
      Establecer Usuario 
    </button>
    </>
  )
}
