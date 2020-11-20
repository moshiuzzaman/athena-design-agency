import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
import logo from '../../images/logo.png'
const Menubar = () => {
    return (
        <Container>
            <Navbar expand="lg" className="pt-4">
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto menu-link text-center">
                        <Nav.Link href="#home">Home </Nav.Link>
                        <Nav.Link href="#home">About </Nav.Link>
                        <Nav.Link href="#service">Services  </Nav.Link>
                        <Nav.Link href="#pricing">Pricing  </Nav.Link>
                        <Nav.Link href="#team">Our Team </Nav.Link>
                        <Nav.Link className="button-style" href="#contact"> Contact us </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Menubar;