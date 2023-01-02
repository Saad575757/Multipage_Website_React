import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import  './Header.css';
import styled from 'styled-components';




const Header = () => {
  return (
    <>
    <Mainheader>
   <div className='flex'>
    <NavLink to='/' className=''>
      <img src='./images/logo.png' alt='logo' className='img'></img>
    </NavLink>
    <Navbar />
    </div>
    </Mainheader>
    
    

    </>
  )

}
  const Mainheader=styled.header`
    height: 10rem;
    padding: 0 4.8rem;
    background-color:${({theme})=>theme.colors.bg}; 
    align-items: center;

  `;
export default Header