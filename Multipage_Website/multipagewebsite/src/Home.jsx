import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection';
import { UseGlobalContext } from './Context';


const Home = () => {
 const {updateHomePage}=UseGlobalContext();

 useEffect(()=>{
  updateHomePage();
 },[])
  return (
    <>
      <HeroSection  />
    </>
  )
}

export default Home;