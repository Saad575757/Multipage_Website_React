import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = ({ name, image }) => {
  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-data-hero">
            <p className='data'>This is me</p>
            <h1 className='heading'>{name}</h1>
            <p className='paragraph'>I'm Frontend Webdeveloper and App developer. I'm currently work ReactJS and Flutter.</p>
            <Button className='btn hireme'>
              <NavLink to='/contact'>Hire Me</NavLink>
            </Button>
          </div>

          <div className="section-data-image">
            <picture>
              <img src={image} className='img'></img>
            </picture>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  
  .section-data-image{
    display: flex;
    justify-content: center;
    align-items: center;
  }
    picture{
      text-align: center;
    }
  .img{
    max-width: 80%;
  }
  .paragraph{
    margin-top:1.5rem;
    margin-bottom: 3.4rem;
    max-width:60rem;
  }  
  .heading{
    text-transform:uppercase;
    font-size:6.4rem;
  }
  .data{
    text-transform:uppercase;
    font-weight:500;
    font-size:1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .btn{
    max-width: 16rem;
  }
  .section-data-hero{
    margin-left:50px;
    display: flex;
    flex-direction:column;
    justify-content:center;
  }
`
  ;
export default HeroSection;