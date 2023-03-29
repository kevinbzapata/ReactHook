import { Link , NavLink } from "react-router-dom"




export const NavBar = () => {
  return (
    <>
        <NavLink to="/">
            Home
        </NavLink>

        <NavLink to="/about">
            About
        </NavLink>

        <NavLink to="/login">
            Features
        </NavLink>


    </>
  )
}
