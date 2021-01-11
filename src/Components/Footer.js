import React, { Component } from 'react';
import { Link } from "react-router-dom";
  
export class Footer extends Component {  
    render() {  
        return (   
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="foot_logo"><a href="index.html"><img alt="" className="img-fluid" src="./assets/images/foot_logo.svg"/></a></div>
                            <ul className="social_media">
                                <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="/"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <ul className="foot_links">
                                <li><b>Sopport</b></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <ul className="foot_links">
                                <li><b>Working Hours</b></li>
                                <li>Sat-Thurs</li>
                                <li>10 AM - 10 PM</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <ul className="foot_links">
                                <li><i className="fa fa-envelope"></i><a href="/">info@acfixing.com</a></li>
                                <li><i className="fa fa-phone-alt"></i><a href="/">+971 54 50 6269 1</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="w-100 text-center copy_text">&copy; 2020 acfixing.com, All rights reserved. Developed by <a href="http://codeprecisesolutions.com/" target="_blank">Code Precise Solutions</a></div>
                        </div>
                    </div>
                </div>
            </footer>  
        )  
    }  
}  
  
export default Footer