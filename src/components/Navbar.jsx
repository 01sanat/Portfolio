import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div style={{  backgroundColor: '#317cf5', padding: '5rem' }}>
        <div style={{ margin:'10px', display: 'flex', justifyContent:'center', gap: '2rem' , backgroundColor: '#fff', padding: '0.5rem', borderRadius: '2rem' , boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
  }}>
          <a href="sanat"
           style={{ 
            color: '#6c757d', 
            textDecoration: 'none',
            padding: '0.5rem', 
            borderRadius: '0.25rem', 
            transition: 'background-color 0.3s' ,
            fontWeight: 'bold', 
            fontSize: '1.2rem'
            }}
            onMouseEnter={(e) => e.target.style.color = 'black'}
            onMouseLeave={(e) => e.target.style.color = '#6c757d'}
           >Sanat</a>
          <a href="work" 
            style={{ color: '#6c757d', textDecoration: 'none', padding: '0.5rem', borderRadius: '0.25rem', transition: 'background-color 0.3s' , fontWeight: 'bold', 
            fontSize: '1.2rem' }}
            onMouseEnter={(e) => e.target.style.color = 'black'}
            onMouseLeave={(e) => e.target.style.color = '#6c757d'}
            >Work</a>
          <a href="contact" style={{ color: '#6c757d', textDecoration: 'none', padding: '0.5rem', borderRadius: '0.25rem', transition: 'background-color 0.3s' ,  fontWeight: 'bold', 
            fontSize: '1.2rem' }}
          onMouseEnter={(e) => e.target.style.color = 'black'}
          onMouseLeave={(e) => e.target.style.color = '#6c757d'}
          >Contact</a>
        </div>
    </div>
  );
};


export default NavbarComponent;
