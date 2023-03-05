import React from 'react'
import HeroSection from './components/HeroSection';

const Home = () => {
  const data={
    name:'Saad Company',
    image:'./images/developer.png',
  }
  return (
    <>
    <HeroSection {...data}/>
    </>
  )
}

export default Home;