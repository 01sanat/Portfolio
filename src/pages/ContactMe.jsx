import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaCode } from 'react-icons/fa'; // Using react-icons for symbols

const ContactMe = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <h2>Contact Me</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a 
          href="https://www.linkedin.com/in/sanat-sharma-2b060919a/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none', 
            color: '#0077B5', 
            padding: '0.5rem', 
            border: '1px solid #0077B5', 
            borderRadius: '0.25rem' 
          }}
        >
          <FaLinkedin size={30} style={{ marginRight: '0.5rem' }} /> LinkedIn
        </a>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sharmasanat01@gmail.com"
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none', 
            color: '#D93025', 
            padding: '0.5rem', 
            border: '1px solid #D93025', 
            borderRadius: '0.25rem' 
          }}
        >
          <FaEnvelope size={30} style={{ marginRight: '0.5rem' }} /> Email
        </a>
        <a 
          href="https://leetcode.com/u/sanat01/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none', 
            color: '#F0A500', 
            padding: '0.5rem', 
            border: '1px solid #F0A500', 
            borderRadius: '0.25rem' 
          }}
        >
          <FaCode size={30} style={{ marginRight: '0.5rem' }} /> LeetCode
        </a>
        <a 
          href="https://www.instagram.com/snt.sharma/?next=%2F" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none', 
            color: '#E4405F', 
            padding: '0.5rem', 
            border: '1px solid #E4405F', 
            borderRadius: '0.25rem' 
          }}
        >
          <FaInstagram size={30} style={{ marginRight: '0.5rem' }} /> Instagram
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
