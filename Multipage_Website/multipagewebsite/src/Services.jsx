import React from 'react'
import styled from 'styled-components';
import Cards from './Cards';



const Services = () => {

  return (

    <Container className='container'>
      <h1 className='Heading'>Our Services</h1>
    <Cards  />
    </Container>
  )
}
const Container=styled.div`
 .Heading{
  text-align: center;
 }
`;

export default Services;