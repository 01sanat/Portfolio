// src/pages/Sanat.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Importing Bootstrap components
// import myPhoto from '../assets/my-photo.jpg'; // Update with the correct path to your photo

const Sanat = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <h2>About Me</h2>
          <p>
            As a backend developer with expertise in Node.js, Express, and NestJS, I thrive on creating robust and scalable server-side solutions. My enthusiasm for databases and data drives me to craft efficient data models and optimize performance. Beyond my technical skills, I am dedicated to continuous learning and fostering innovation. My goal is to leverage my knowledge to build systems that not only meet but exceed expectations, driving success in every project I undertake.
          </p>
          <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="primary">View My Resume</Button>
          </a>
        </Col>
        <Col md={6} className="text-center">
          <img 
            // src={myPhoto} 
            alt="Sanat" 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Sanat;
