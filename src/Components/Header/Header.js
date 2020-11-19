import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';

const Header = () => {
    return (
        <div>
            <Menubar />
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className="header-heading">Florence agency</h1>
                        <p className="header-description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button className="button-style">See Pricing</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;