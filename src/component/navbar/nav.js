import React from 'react'
import './nav.css'
import { Navbar,Nav,Container } from 'react-bootstrap'
import logo from '../../img/logo.png'

export default function Navs() {
  return (
    <div>
     <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">about us</Nav.Link>
            <Nav.Link href="#home">explore food</Nav.Link>
            <Nav.Link href="#link">Review</Nav.Link>
            <Nav.Link href="#home">feq</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link id="last">02356346</Nav.Link>
         </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}
