import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
import logo from '../../images/logo.png'
const Menubar = () => {
    return (
        <Container>
            <Navbar expand="lg" className="mt-4">
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto menu-link text-center">
                        <Nav.Link href="#home">Home </Nav.Link>
                        <Nav.Link href="#link">About </Nav.Link>
                        <Nav.Link href="#link">Services  </Nav.Link>
                        <Nav.Link href="#link">Pricing  </Nav.Link>
                        <Nav.Link href="#link">Our Team </Nav.Link>
                        <Nav.Link className="button-style" href="#link"> Contact us </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Menubar;