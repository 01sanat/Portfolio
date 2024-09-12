import React from 'react';
// import myPhoto from '../assets/my-photo.jpg'; // Update with the correct path to your photo

const Sanat = () => {
  return (
    <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 50%', padding: '0 1rem' }}>
        <h2>About Me</h2>
        <p>
          As a backend developer with expertise in Node.js, Express, and NestJS, I thrive on creating robust and scalable server-side solutions. My enthusiasm for databases and data drives me to craft efficient data models and optimize performance. Beyond my technical skills, I am dedicated to continuous learning and fostering innovation. My goal is to leverage my knowledge to build systems that not only meet but exceed expectations, driving success in every project I undertake.
        </p>
        <a 
          href="/path-to-your-resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            padding: '0.5rem 1rem', 
            borderRadius: '0.25rem', 
            textDecoration: 'none' 
          }}
        >
          View My Resume
        </a>
      </div>
      <div style={{ flex: '1 1 50%', padding: '0 1rem', textAlign: 'center' }}>
        <img 
          // src={myPhoto} 
          alt="Sanat" 
          style={{ width: '100%', borderRadius: '8px' }} 
        />
      </div>
    </div>
  );
};

export default Sanat;
