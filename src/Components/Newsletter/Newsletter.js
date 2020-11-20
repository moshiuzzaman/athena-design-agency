import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
    return (
       <div id='contact' className='normalBg'>
            <div className='container p-5 text-center' >
            <h1 className='pricingHeader'>Get your design right, right now</h1>
            <p className='achivementsParagraph'>Be the first know our latest offers and updates!</p>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Your Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="searchButton" type="button">Search</button>
                </div>
            </div>
        </div>
       </div>

    );
};

export default Newsletter;