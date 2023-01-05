import React from 'react'
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <>
    <Wrapper>
        <div className="container-grid-two-column">
            <div className="section-hero-data">
                <p className='paragraoh'>This is me</p>
                <h1 className='heading'>Saad Khan</h1>
                <p className='intro'>I'm Frontend ReactJs Web-developer and flutter App devolper,
                    working as freelancer.
                </p>

            </div>
            <Button>
                 
            </Button>
            <div className="section-hero-img"></div>
        </div>
    </Wrapper>
    </>
  )
}
const Wrapper= styled.section`
    
`
;
export default HeroSection