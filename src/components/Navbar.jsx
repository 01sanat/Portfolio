import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div style={{ backgroundColor: '#343a40', padding: '1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="sanat" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem', borderRadius: '0.25rem', transition: 'background-color 0.3s' }}>Sanat</a>
          <a href="work" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem', borderRadius: '0.25rem', transition: 'background-color 0.3s' }}>Work</a>
          <a href="contact" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem', borderRadius: '0.25rem', transition: 'background-color 0.3s' }}>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
