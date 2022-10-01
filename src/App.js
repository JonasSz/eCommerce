import React, { useState } from 'react';
import Home from './Routes/Home';
import Handys from './Routes/Handys';
import Headphones from './Routes/Headphones.js';
import Tablets from './Routes/Tablets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Laptops from './Routes/Laptops';
import Navbar from './Components/Navbar';


function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Handys' element={<Handys />}/>
        <Route path='/Kopfhoerer' element={<Headphones />}/>
        <Route path='/Tablets' element={<Tablets />}/>
        <Route path='/Laptops' element={<Laptops />}/>
      </Routes>

      
    </Router>

  )
}

export default App
