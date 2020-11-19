import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';
import headerImage from '../../images/HeaderImage.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Menubar />
            <Container>
                <Row className='align-items-center py-5'>
                    <Col md={6}>
                        <h1 className="header-heading mb-4 pb-3">Florence agency</h1>
                        <p className="section-description  mb-4 ">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button className="button-style  mb-=4">See Pricing</Button>
                    </Col>
                    <Col md={6}>
                        <img src={headerImage} alt="HeaderImage" className="header-img w-100 py-5"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;