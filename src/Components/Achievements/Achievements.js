import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Achievements.css';
import happy from '../../images/happy@2x.png';
import projects from '../../images/marketing@2x.png';
import surface from '../../images/surface1@2x.png';
import transportation from '../../images/transportation@2x.png';

const Achievements = () => {
    return (
        <div className="achivements-section">
            <div className="achivements-bg mb-5">
                <div className="container">
                    <div className="row py-5">

                        <div className="achivementsText col-md-4">
                            <h1 className="achivementsHeader">Our Achievements</h1>
                            <p className="achivementsParagraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>

                        </div>

                        <div className="offset-md-1 col-md-7 mt-5">
                            <Row>
                                <Col>
                                    <Button className='button-style mb-5'>
                                        <Row>
                                            <Col><img className='achivementsLogo mt-3' src={happy} alt="" /></Col>
                                            <Col>
                                                <h1 className='achivementsHistory'>700+</h1><span className='achivementsHistory'>Happy Clients</span>
                                            </Col>
                                        </Row>
                                    </Button>


                                    <Button className='button-style'>
                                        <Row>
                                            <Col><img className='achivementsLogo mt-3' src={surface} alt="" /></Col>
                                            <Col>
                                                <h1 className='achivementsHistory'>25+</h1><span className='achivementsHistory'>Crazy Minds</span>
                                            </Col>
                                        </Row>
                                    </Button>

                                </Col>
                                <Col>
                                <Button className='button-style mb-5'>
                                        <Row>
                                            <Col><img className='achivementsLogo mt-3' src={projects} alt="" /></Col>
                                            <Col>
                                                <h1 className='achivementsHistory'>140+</h1><span className='achivementsHistory'>Projects Completed</span>
                                            </Col>
                                        </Row>
                                    </Button>

                                    <Button className='button-style'>
                                        <Row>
                                            <Col><img className='achivementsLogo mt-3' src={transportation} alt="" /></Col>
                                            <Col>
                                                <h1 className='achivementsHistory'>75+</h1><span className='achivementsHistory'>Running Projects</span>
                                            </Col>
                                        </Row>
                                    </Button>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Achievements;