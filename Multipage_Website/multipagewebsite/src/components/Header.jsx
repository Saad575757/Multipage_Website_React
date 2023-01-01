import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import  './Header.css';




const Header = () => {
  return (
    <>
   <div className='flex'>
    <NavLink to='/' className=''>
      <img src='./images/logo.png' alt='logo' className='img'></img>
    </NavLink>
    <Navbar />
    </div>
    
    

    </>
  )
}

export default Header