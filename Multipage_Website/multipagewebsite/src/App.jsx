import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import Error from './Error'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { ThemeProvider } from 'styled-components';
import { Globalstyle } from './GlobalStyle'

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      bg: "rgb(249 ,249 ,255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243,0.5)",
      hr: "#ffffff",
      helper: "#8490ff",
      gradient: "linear-gradient(0deg,rgb(132,144,255)0%,rgb(98 189 252) 100%)",
      shadow: "rgba(0,0,0,0.2) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",



    },
    media: { mobile: "768", tab: "998", },

  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Globalstyle/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>


    </>
  )
}

export default App;