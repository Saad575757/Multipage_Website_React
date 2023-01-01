import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;