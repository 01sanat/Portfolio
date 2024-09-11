import React from 'react'
import { Container, Nav , Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NavbarComponent = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="sanat">Sanat</Nav.Link>
            <Nav.Link href="work">Work</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent