import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk us today</h3>
          </div>
          <div>
            <NavLink to='/'>
              <Button >Get Started</Button>
            </NavLink >
          </div>
        </div>
      </section>
      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>Saad Khan</h3>
            <p>Frontend Webdeveloper And Appdeveloper</p>
          </div>
          <div className='footer-subscribe'>
            <h3>Subscribe to our latest updates.</h3>
            <form action='#'>
              <input type="email" required autoComplete='Off' placeholder='Email' />
              <input type='submit' value='Subscribe' />

            </form>
          </div>
          <div className="footer-social">
            <h3>follow us on socialmedia platform</h3>
            <div className='container grid grid-three-column'>
            <div className='footer-social-icons'>
              <a href="https://github.com/Saad575757">
              <FaDiscord className='icons' /></a>
            </div>
            <div className='footer-social-icons'>
              <a href="https://www.instagram.com/muhammad_saad493/">
              <FaInstagram className='icons' /></a>
            </div>
            <div className='footer-social-icons'>
              <a href="https://www.facebook.com/profile.php?id=100008739456909">
              <FaFacebook className='icons' /></a>
            </div>
            </div>
          </div>

        </div>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.section`
 
  .contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    

    .grid div:last-child{
      justify-self: end;
      align-self: center;
    }
  }
  footer{
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3{
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p{
      color: ${({ theme }) => theme.colors.white};
    }
    div{
      
    }
    .icons{
      
      color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;

    }
    /* .footer-social-icons{
      display: flex;
      gap: 2rem;
      div{
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons{
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    } */

  }
`;
export default Footer