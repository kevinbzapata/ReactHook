
import { UserContext } from "./UserContext"

// Define el proedor

const user = {
    id: 123,
    name: 'John',
    email: 'john@example.com'
}


export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo' , user: user }}>

        {/* Renderizar en este espacio  */}
       

        {children}
    </UserContext.Provider>
  )
}
