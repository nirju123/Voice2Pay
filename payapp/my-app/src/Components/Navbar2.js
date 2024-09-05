import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function CustomNavbar() {
  // Function to handle "Add New Contact" click
  const handleAddContact = () => {
    // Call the function to add a new contact
    console.log("Function to add new contact called");
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      localStorage.removeItem("jwtToken"); // Remove token from local storage
      navigate("/");
    }
  };

  return (
    <Navbar bg="transparent" expand="lg" className="sticky-top">
      <Navbar.Brand href="#home">BrandName</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* Dropdown menu */}
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            {/* Call handleAddContact function when clicked */}
            <NavDropdown.Item onClick={handleAddContact}>Add New Contact</NavDropdown.Item>
            <NavDropdown.Divider />
            {/* Call handleLogout function when clicked */}
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
