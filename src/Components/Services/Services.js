import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ServicesData } from './ServicesData';
import SingleServices from './SingleServices';
import './Services.css'

const Services = () => {
    return (
        <div id='service' className="services-section">
            <div className="wavebg">
                <Container align="center" className='py-5'>
                    <h2 className="services-section-header">What we do</h2>
                    <p className="section-description">Our main focus is to make the User Experience very <br />simple and easy. Simplicity is our Strength.</p>
                    <Row className="mt-5">
                        {
                            ServicesData.map(sd => <SingleServices key={sd.id} serviceData={sd}></SingleServices>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Services;