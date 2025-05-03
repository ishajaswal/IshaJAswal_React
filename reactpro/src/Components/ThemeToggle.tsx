import React, { useState, useEffect } from 'react';
import "../assets/NewCss/ThemeToggle.css";

function ThemeToggle() {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme ? storedTheme : 'light';
  const [theme, setTheme] = useState(initialTheme);

  // Apply the theme to the document body
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? 'white' : '#121212';
    document.body.style.color = theme === 'light' ? 'black' : 'white';
    localStorage.setItem('theme', theme); // Store the selected theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <p>This is a simple app with Light/Dark Mode toggle functionality.</p>
    </div>
  );
}

export default ThemeToggle;
