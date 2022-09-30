import React from 'react';
import Home from './Routes/Home';
import Handys from './Routes/Handys';
import Headphones from './Routes/Headphones.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Handys' element={<Handys />}/>
        <Route path='/Kopfhoerer' element={<Headphones />}/>
      </Routes>

      
    </Router>

  )
}

export default App
