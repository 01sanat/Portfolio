import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaEnvelope , FaCode } from 'react-icons/fa'; // Using react-icons for symbols


const ContactMe = () => {
  return (
    <Container className="text-center mt-4">
      <Row className="mb-4">
        <Col>
          <h2>Contact Me</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button 
            variant="light" 
            href="https://www.linkedin.com/in/sanat-sharma-2b060919a/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0077B5' }} // LinkedIn's blue color
          >
            <FaLinkedin size={30} /> LinkedIn
          </Button>
        </Col>
        <Col>
          <Button 
            variant="light" 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sharmasanat01@gmail.com"
            style={{ color: '#D93025' }} // Gmail's red color

          >
            <FaEnvelope size={30} /> Email
          </Button>
        </Col>
        <Col>
        <Button 
            variant="light" 
            href="https://leetcode.com/u/sanat01/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#F0A500' }} // LeetCode color (choose a more appropriate color if available)
          >
            <FaCode size={30} /> LeetCode
          </Button>
        </Col>
        <Col>
          <Button 
            variant="light" 
            href="https://www.instagram.com/snt.sharma/?next=%2F" 
            target="_blank" 
            // rel="noopener noreferrer"
            style={{ color: '#E4405F' }} // Instagram's pink color
          >
            <FaInstagram size={30} /> Instagram
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactMe