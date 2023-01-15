import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return <Header>
       <Navbar bg="dark" variat='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">eCommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='mr-auto'>
                <Nav.Link href="#/cart">Cart</Nav.Link>
                <Nav.Link href="#/login">Sign In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Header>
}

export default Header
