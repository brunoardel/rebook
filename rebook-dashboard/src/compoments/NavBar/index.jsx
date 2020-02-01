import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <a href="#home">
            <img src='https://www.reebokstudio.com.br/images/logo-footer.png' alt="Logo" width="130px" responsive/>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Pipeline</Nav.Link>
            <Nav.Link href="#oportunidades">Oportunidades</Nav.Link>
            <Nav.Link href="#relatorios">Relatórios</Nav.Link>
            <Nav.Link href="#configuracao">Configuração</Nav.Link>
          </Nav>
          
          <Button variant="outline-info" className="mr-3">
            <FontAwesomeIcon icon={faPaperclip} size="lg" color="white"></FontAwesomeIcon>
          </Button>{' '}
          <Button variant="outline-info">
            <FontAwesomeIcon icon={faCalendarAlt} size="lg" color="white"></FontAwesomeIcon>
          </Button>{' '}

          
         
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
