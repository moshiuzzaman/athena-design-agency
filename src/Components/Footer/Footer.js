import React from 'react';
import fb from '../../images/facebook-logo-in-circular-shape@2x.png';
import logo from '../../images/logo.png';
import twitter from '../../images/twitter (4)@2x.png';
import linkedin from '../../images/facebook-logo-in-circular-shape@2x.png';
import dribbble from '../../images/dribbble (1)@2x.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className='w-100 p-5 normalBg'>
            <footer className="page-footer font-small pt-4">
                <div className="container text-center text-md-left">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 mx-auto">
                            <img src={logo} style={{ width: '100px', marginBottom: '5%', paddingTop: '15%' }} alt="" />
                            <ul className="list-unstyled list-inline text-left">
                                <li className="list-inline-item">
                                    <a class="btn-floating btn-fb mx-1">
                                        <img src={fb} alt="" className='w-50' />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-tw mx-1">
                                        <img src={twitter} alt="" className='w-50' />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-gplus mx-1">
                                        <img src={linkedin} alt="" className='w-50' />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-li mx-1">
                                        <img src={dribbble} alt="" className='w-50' />
                                    </a>
                                </li>

                            </ul>
                        </div>


                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto mt-4 link">
                            <ul className="list-unstyled">
                                <li>
                                    Features
                                </li>
                                <li>
                                    Enterprise
                                </li>
                                <li>
                                    Pricing
                                </li>
                            </ul>

                        </div>


                        <hr class="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto mt-5 link">
                            <ul className="list-unstyled">
                                <li>
                                    Blog
                                </li>
                                <li>
                                    Help Center
                                </li>
                                <li>
                                    Contact Us
                                </li>
                                <li>
                                    Status
                                </li>
                            </ul>

                        </div>


                        <hr class="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto mt-5 link">
                            <ul className="list-unstyled">
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Terms of Service
                                </li>
                                <li>
                                    Security
                                </li>
                                <li>
                                    Login
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;