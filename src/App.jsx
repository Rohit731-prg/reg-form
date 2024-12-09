import React, { useState } from 'react';
import From from './Component/From';
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div 
    style={{background: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black'}}
    className='main-container'>
      <h1 style={{textDecoration : 'underline'}}>Registration Form</h1>
      <button 
      style={{background: isDark ? 'white' : 'black', color: isDark ? 'black' : 'white'}}
      className='btn' 
      onClick={() => setIsDark(!isDark)}>{isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <From />
    </div>
  )
}

export default App