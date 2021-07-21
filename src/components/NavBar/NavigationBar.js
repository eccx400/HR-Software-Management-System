import React from "react";
//import NavBar from 'react-bootstrap';
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">OrionHR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
