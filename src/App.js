import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Country from './pages/Country';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:id' element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
