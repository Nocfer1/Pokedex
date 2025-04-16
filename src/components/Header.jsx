import React from 'react';
import headerImage from '../assets/pokedexlogo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header style={{ textAlign: 'center' }}>
      <img 
        src={headerImage} 
        alt="Header" 
        className="logo-img"  // Asignamos la clase aquí
        onClick={() => navigate('/')}
      />
    </header>
  );
}

export default Header;
