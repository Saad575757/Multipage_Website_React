import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';

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

        </div>
      </footer>
    </Wrapper>
  )
}
const Wrapper=styled.section`
 
  .contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({theme})=>theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({theme})=>theme.colors.shadowSupport};
    transform: translateY(50%);
    

    .grid div:last-child{
      justify-self: end;
      align-self: center;
    }
  }
  footer{
    padding: 14rem 0 9rem 0;
    background-color: ${({theme})=>theme.colors.footer_bg};
    h3{
      color: ${({theme})=>theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p{
      color: ${({theme})=>theme.colors.white};
    }

  }
`;
export default Footer