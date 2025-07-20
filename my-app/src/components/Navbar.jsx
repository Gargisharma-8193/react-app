import React from 'react'
import './Component.css'
import { NavLink } from 'react-router-dom'

const Navbar = () =>{
    return (
        <div className='container' >
         <NavLink  to="/">
            Home
         </NavLink>

         <NavLink  to="/pastes">
            Pastes
         </NavLink>

        </div>
    )
}
export default Navbar