import React, { Component } from 'react';
import { Link } from "react-router-dom";
  
export class Footer extends Component {  
    render() {  
        return (   
            <div className="footer-main">
                        {/* <!-- Footer --> */}
        <footer className="pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <div className="footer-logo">
                                <a className="logo-link" href="index.html">
                                    <img src={'assets/img/logo-two.png'} alt="Logo" />
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className='bx bxl-pinterest-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <div className="footer-service">
                                <h3>Services</h3>
                                <ul>
                                    <li>
                                        <a href="#" target="_blank">Manufacturing</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">Automation</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">Commercial</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">Healthcare</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">Automatic Machine</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">Upgrade Data</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <div className="footer-service">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li>
                                        <a href="index.html" target="_blank">Home</a>
                                    </li>
                                    <li>
                                        <a href="about.html" target="_blank">About</a>
                                    </li>
                                    <li>
                                        <a href="project.html" target="_blank">Projects</a>
                                    </li>
                                    <li>
                                        <a href="service.html" target="_blank">Services</a>
                                    </li>
                                    <li>
                                        <a href="blog.html" target="_blank">Blog</a>
                                    </li>
                                    <li>
                                        <a href="contact.html" target="_blank">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <div className="footer-touch">
                                <h3>Get In Touch</h3>
                                <ul>
                                    <li>
                                        <i className='bx bxs-phone-call'></i>
                                        <h4>Phone</h4>
                                        <a href="tel:882569756">882-569-756</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-mail-send'></i>
                                        <h4>Email</h4>
                                        <a href="mailto:info@robtic.com">info@robtic.com</a>
                                    </li>
                                    <li>
                                        <i className='bx bx-location-plus'></i>
                                        <h4>Address</h4>
                                        <span>3254-425 NW-2nd Ave, Miami USA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- End Footer --> */}

        {/* <!-- Copyright --> */}
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-item">
                    <p>Copyright @2020 Design & Developed by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                </div>
            </div>
        </div>
        {/* <!-- End Copyright --> */}
        
            </div>  
        )  
    }  
}  
  
export default Footer