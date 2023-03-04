import React from 'react'
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-data-hero">
            <p>This is me</p>
            <h1 className='heading'>Saad</h1>
            <p className='Paragraph'>I'm Frontend Webdeveloper and App developer.</p>

          </div>
          <div className="section-data-image"></div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper= styled.section`
    
`
;
export default HeroSection