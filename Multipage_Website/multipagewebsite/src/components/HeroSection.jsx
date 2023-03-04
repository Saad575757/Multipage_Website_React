import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = () => {
  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-data-hero">
            <p className='data'>This is me</p>
            <h1 className='heading'>Saad</h1>
            <p className='paragraph'>I'm Frontend Webdeveloper and App developer.</p>
            </div>
            <Button className='btn hireme'>
              <NavLink to='/contact'>Hire Me</NavLink>
            </Button>
          <div className="section-data-image">
            <picture>
              <img src='./images/ok.png'></img>
            </picture>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper= styled.section`
    
`
;
export default HeroSection