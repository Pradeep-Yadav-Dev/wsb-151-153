import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="#home">
            <img src='https://packshifts.in/images/logo.png'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
                <Link to={"/"} >Home</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to={"/about"} > About </Link>
            </Nav.Link>
            <Nav.Link >
                <Link to={"/gallery"} > Gallery</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to={"/contact"} >Contact</Link>
            </Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
