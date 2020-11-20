import React from 'react';
import './Features.css';
import featureBg from '../../images/features.png';
import { Button } from 'react-bootstrap';

const Features = () => {
    return (
        <div id="team" className="features-section mt-5">
            <div className="feature-bg">
            <div className="container">
            <div className="row">
               
                <div className="col-md-5">
                    <img id='featureImg' style={{width:'100%'}} src={featureBg} alt="" />
                </div>

                <div className="col-md-6 mt-5 offset-md-1">
                    <h1 id='stay' className="featureText">Stay Running & Project</h1>
                    <p className='featureParagraph'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>

                    <Button id='buttonContact' className="button-style mt-4">Contact Us</Button>
                </div>
                </div>
            </div>
            </div>
            



        </div>
    );
};

export default Features;