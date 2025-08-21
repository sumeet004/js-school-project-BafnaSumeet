// src/components/Header.tsx
import React from 'react';
import '../styles/Header.css'; // import the CSS

type HeaderProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', alignItems: 'center' }}>
      <h1>Timeline App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
