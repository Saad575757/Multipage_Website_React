import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import styled from 'styled-components';




const Header = () => {
  return (
    <>
      <Mainheader>
        <NavLink to='/' className=''>
          <img src='./images/ok.png' alt='logo' className='img'></img>
        </NavLink >
        <Navbar />

      </Mainheader>



    </>
  )

}
const Mainheader = styled.header`
    height: 10rem;
    padding: 0 4.8rem;
    background-color:${({ theme }) => theme.colors.bg}; 
    align-items: center;
    display: flex;
    justify-content: space-between;

    .img{
      height: auto;
      max-width: 40%;
    }

  `;
export default Header