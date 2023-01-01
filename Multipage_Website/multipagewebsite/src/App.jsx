import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import Error from './Error'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<Error />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;