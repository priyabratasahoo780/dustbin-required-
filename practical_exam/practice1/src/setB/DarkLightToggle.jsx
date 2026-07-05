import React from 'react'
import { useState } from 'react';
export default function DarkLightToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
        const Style = {
          backgroundColor: isDarkMode ? 'black' : 'white',
          color: isDarkMode ? 'red' : 'green',
          minHeight: '100vh',
        }
    return (
      <div style={Style}>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

       </div>
  )
} 
