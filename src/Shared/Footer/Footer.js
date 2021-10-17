import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-4'>
            <div className="container d-flex align-items-center justify-content-between">
                <div>
                    <h3 className='text-danger'>HealthCare</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Quam dolor nulla nihil itaque ab in nostrum quas sit, eveniet vitae?
                    </p>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;