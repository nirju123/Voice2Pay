import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="transparent" expand="lg" className="sticky-top">
      <Navbar.Brand href="#home">BrandName</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
