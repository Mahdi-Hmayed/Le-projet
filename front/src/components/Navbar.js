import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navbarr() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="https://st2.depositphotos.com/1496387/10725/v/950/depositphotos_107251736-stock-illustration-restaurant-vector-logo-diner-cafe.jpg"
          width="50"
          height="50"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Delicious Food</Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link href="#sing up">SING UP</Nav.Link>
          <Nav.Link eventKey={2} href="#login">
            LOGIN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarr;
