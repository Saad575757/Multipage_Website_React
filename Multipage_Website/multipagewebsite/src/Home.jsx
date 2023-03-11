import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection';
import { UseGlobalContext } from './Context';
import Services from './Services';


const Home = () => {
 const {updateHomePage}=UseGlobalContext();

 useEffect(()=>{
  updateHomePage();
 },[])
  return (
    <>
      <HeroSection  />
      <Services />
    </>
  )
}

export default Home;