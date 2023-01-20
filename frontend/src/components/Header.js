import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return <header>
       <Navbar bg="dark" variat='dark' expand="lg" collapseOnSelect>
        <Container>
        <NavLink as={Link} to='/'>
          <Navbar.Brand>eCommerce</Navbar.Brand>
          </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ml-auto'>
              <NavLink as={Link} to='/cart'>
                <Nav.Link><i className='fa fa-shoping-cart'></i>Cart</Nav.Link>
                </NavLink>
                <NavLink as={Link} to='/login'>
                <Nav.Link><i className='fa fa-user'></i>Sign In</Nav.Link>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
}

export default Header
