import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Navbar = () => {
    const Nav = styled.nav`
        .navlist{
            display: flex;
            gap: 4.8rem;
        }
        li{
            list-style: none;

            .navlink{
                &:link,
                & :visited{
                    display: inline-block;
                    text-decoration: none;
                    font-size: 1.8rem;
                    font-weight:500;
                    text-transform: uppercase;
                    color: ${({ theme }) => theme.colors.black};
                    transition: color 0.3s linear;

                }
                &:hover,
                & :active{
                color: ${({ theme }) => theme.colors.helper}; 
                
            }
        }
    
        }
       
    
  `
    return (
        <Nav>
            <div className='navbar'>
                <ul className='navlist'>
                    <li>
                        <NavLink to='/' className='navlink'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='navlink'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/service' className='navlink'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='navlink'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
    )

}


export default Navbar