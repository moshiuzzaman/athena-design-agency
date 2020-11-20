import React from 'react';
import { Button } from 'react-bootstrap';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="pricingBg">
            <div className="newBg">
                <div className=' p-5 text-center pricingContainer'>
                    <h1 className='text-center pt-5 pricingHeader'>Choose Your Dedicated Team</h1>

                    <div className="card-deck p-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title pricingHeader">$199</h1>
                                <h6>For Basic</h6>
                               <hr></hr>
                                <p className="card-text priceList"> Homepage</p>
                                <p className="card-text priceList"> No Inner Page</p>
                                <p className="card-text priceList"> Asset file</p>
                                <p className="card-text priceList"> Source file</p>
                                <p className="card-text priceList"> Free Stock Photos</p>
                                <p className="card-text priceList"> 10 Days Free Support</p>
                                <p className="card-text priceList"> 24/7 Support</p>
                                <button className="orderButton mt-5">Order Now</button>
                                
                            </div>

                            
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title pricingHeader">$399</h1>
                                <h6>For Preferred</h6>
                               <hr></hr>
                                <p className="card-text priceList"> Homepage</p>
                                <p className="card-text priceList"> 4 Inner Pages</p>
                                <p className="card-text priceList"> Asset file</p>
                                <p className="card-text priceList"> Source file</p>
                                <p className="card-text priceList"> Free Stock Photos</p>
                                <p className="card-text priceList"> 20 Days Free Support</p>
                                <p className="card-text priceList"> 24/7 Support</p>
                                <button className="orderButton mt-5">Order Now</button>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title pricingHeader">$599</h1>
                                <h6>For Elite</h6>
                               <hr></hr>
                                <p className="card-text priceList"> Homepage</p>
                                <p className="card-text priceList"> 8 Inner Pages</p>
                                <p className="card-text priceList"> Asset file</p>
                                <p className="card-text priceList"> Source file</p>
                                <p className="card-text priceList"> Free Stock Photos</p>
                                <p className="card-text priceList"> 30 Days Free Support</p>
                                <p className="card-text priceList"> 24/7 Support</p>
                                <button className="orderButton mt-5">Order Now</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Pricing;