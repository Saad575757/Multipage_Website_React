import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='navbar'>
            <ul>
                <NavLink to='/' className='home'>Home</NavLink>
            </ul>
            <ul>
                <NavLink to='/about' className='about'>About</NavLink>
            </ul>
            <ul>
                <NavLink to='/service' className='service'>Services</NavLink>
            </ul>
            <ul>
                <NavLink to='/contact' className='contact'>Contact</NavLink>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar