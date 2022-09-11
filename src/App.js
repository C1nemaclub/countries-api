import React, { useState, createContext } from 'react';
import Home from './pages/Home';
import Country from './pages/Country';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className='App' id={theme}>
      <Router>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Header />
          <Routes>
            <Route path='/countries-api' element={<Home />} />
            <Route path='/country/:id' element={<Country />} />
          </Routes>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
