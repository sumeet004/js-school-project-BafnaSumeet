// src/components/Header.tsx
import React from 'react';
import '../styles/Header.css';

type HeaderProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className={theme}>
      <h1>Timeline App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
