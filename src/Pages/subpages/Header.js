import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars } from 'react-icons/fa';  // Icon for the collapsible menu
import { AiOutlineUser } from 'react-icons/ai';  // Icon for the admin logo
import "./css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="navbar-custom">
        <Container fluid>
          {/* Left Side - Collapsible Menu Icon */}
          <Navbar.Brand href="#">
            <FaBars className="menu-icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Now Showing</Nav.Link>
              <Nav.Link href="#">Upcoming Releases</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Right Side - Admin Icon */}
          <Nav className="ml-auto">
            <Nav.Link href="#" className="navbar-right-logo">
              <AiOutlineUser className="admin-icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="logo">E MAX CINEMAS</h1>
        <p className="tagline">Powered by Dolby Atmos</p>
        <button className="btn btn-danger mt-3">Book now</button>
      </div>
    </header>
  );
};

export default Header;
