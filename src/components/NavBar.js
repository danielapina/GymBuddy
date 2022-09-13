import React from "react";
import { NavLink } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar  sticky="top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/">GymBuddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="aboutus">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="slips">WorkOut Slips</Nav.Link>
            <Nav.Link as={NavLink} to="exercises">Detail Exercises</Nav.Link>
            <Nav.Link as={NavLink} to="saved">My WorkOuts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
