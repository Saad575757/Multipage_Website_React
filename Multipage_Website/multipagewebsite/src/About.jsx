import React,{useEffect} from 'react'
import HeroSection from './components/HeroSection';
import { UseGlobalContext } from './Context';

const About = () => {

  const {updateAboutPage}=UseGlobalContext();

 useEffect(()=>{
  updateAboutPage();
 },[])
  return (
    <HeroSection  />
  )
}

export default About;