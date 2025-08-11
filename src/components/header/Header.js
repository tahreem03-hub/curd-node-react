import React from 'react'
import './header.css'
//importing navbar container and nav link
import { Container, Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>My app</Navbar.Brand>
          <Nav className="m1-auto">
            <Nav.Link as={Link} to='/' className='nav-link'>Dashboard</Nav.Link>
            <Nav.Link as={Link} to='/user' className='nav-link'>Post User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
