import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './styles/Button';

const Error = () => {
  return (

    <Wrapper>
      <h2>No Page Found</h2>
      <Button className='btn'>
        <NavLink to='/'>Go Back</NavLink>
      </Button>
    </Wrapper>



  )
}
const Wrapper = styled.section`
  padding: 15rem 0;
  
  .btn{
    margin-top: 3rem;
    margin-left: 45%;
  }
`;

export default Error;