import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {

  const data={
    name:'Saad Khan',
    image:'./images/ok.png',
  }
  return (
    <HeroSection {...data}/>
  )
}

export default About