import React from 'react';

import './Achievements.css';
import happy from '../../images/happy@2x.png';
import projects from '../../images/marketing@2x.png';
import surface from '../../images/surface1@2x.png';
import transportation from '../../images/transportation@2x.png';

const Achievements = () => {
    return (
        <div className="achivements-section">
            <div className="achivements-bg">
                <div className="container">
                    <div className="row py-5">

                        <div className="achivementsText col-md-4">
                            <h1 className="achivementsHeader">Our Achievements</h1>
                            <p className="achivementsParagraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>

                        </div>

                        <div className="offset-md-1 col-md-7 mt-5">
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <div className="achivenmentsCard row d-flex align-items-center mb-5">
                                        <div>
                                            <img className="happy1" src={happy} alt="" />
                                        </div>
                                        <div className="pl-5">
                                            <h1 className='achivementNumber'>700+</h1>
                                            <p className='achivementShow'>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 text-center cardNew">
                                    <div className="achivenmentsCard row d-flex align-items-center">
                                        <div>
                                            <img className="happy" src={projects} alt="" />
                                        </div>
                                        <div className="pl-5">
                                            <h1 className='achivementNumber'>140+</h1>
                                            <p className='achivementShow'>Project Completed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center cardNew">
                                    <div className="achivenmentsCard row d-flex align-items-center">
                                        <div>
                                            <img className="happy" src={surface} alt="" />
                                        </div>
                                        <div className="pl-5">
                                            <h1 className='achivementNumber'>35+</h1>
                                            <p className='achivementShow'>Crazy Minds</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center cardNew">
                                    <div className="achivenmentsCard row d-flex align-items-center">
                                        <div>
                                            <img className="happy" src={transportation} alt="" />
                                        </div>
                                        <div className="pl-5">
                                            <h1 className='achivementNumber'>75+</h1>
                                            <p className='achivementShow'>Running Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Achievements;