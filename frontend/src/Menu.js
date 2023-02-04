import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './img/pasta.svg'

function Menu() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Gerenciador de Arquivos</Nav.Link>
          </Nav>
      </Container>
    </Navbar> 
    </>
  );
}

export default Menu;
