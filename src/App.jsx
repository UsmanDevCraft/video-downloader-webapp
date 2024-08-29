import React from 'react'
import Home from './components/Home'
import Youtube from './components/Youtube'
import Facebook from './components/Facebook'
import Instagram from './components/Instagram'
import Shorts from './components/Shorts'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/youtube' element={<Youtube />}/>
        <Route path='/facebook' element={<Facebook />}/>
        <Route path='/instagram' element={<Instagram />}/>
        <Route path='/shorts' element={<Shorts />}/>
      </Routes>
    </Router>
  )
}

export default App
