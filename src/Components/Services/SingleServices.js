import React from 'react';
import { Col } from 'react-bootstrap';

const SingleServices = ({ serviceData }) => {
    const { title, description, image } = serviceData
    return (
        <Col className='p-2 ' md={3}>
            <div className="single-service px-3 py-4">
                <img src={image} alt="" className="service-image mb-3" />
                <h6>{title}</h6>
                <p className='section-description'>{description}</p>
            </div>


        </Col>
    );
};

export default SingleServices;