import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer bg-dark text-white py-4'>
            <div className="container d-lg-flex align-items-center justify-content-between">
                <div>
                    <h2 className='text-danger'><i className="fa fa-heart text-white"></i> MS Hospital</h2>
                    <p className='fs-5 py-3'>
                        <address>
                            BX Tower, <br />
                            112, B/O street, <br />
                            Paris, France.
                        </address>
                    </p>
                </div>
                <div className='d-lg-flex align-items-center jusfify-content-between'>                    
                    <ul>
                        <h4>Company</h4>
                        <li>About</li>
                        <li>Doctors</li>
                        <li>Blogs</li>
                    </ul>
                    <ul>
                        <h4>Legal</h4>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Sequrity</li>
                    </ul>
                    <ul>
                        <h4>Support</h4>
                        <li>Help</li>
                        <li>FAQs</li>
                        <li>Reviews</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='py-1 my-1 text-center'><span className='text-danger'>Copyright</span> &copy; 2021, all rights reserved</p>
        </div>
    );
};

export default Footer;