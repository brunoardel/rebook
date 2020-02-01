import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Pipeline</Nav.Link>
            <Nav.Link href="#oportunidades">Oportunidades</Nav.Link>
            <Nav.Link href="#relatorios">Relatórios</Nav.Link>
            <Nav.Link href="#configuracao">Configuração</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
