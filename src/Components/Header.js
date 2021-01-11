import React, { Component } from 'react';
import { Link } from "react-router-dom";
  
export class Header extends Component {  
    constructor(props) {
        super(props);
    
        this.state = {
          openSearch: false
        }
    
        this.handleClick = this.handleClick.bind(this);
      }


      handleClick(e) {
        // modify the state, this will automatically recall render() below.
        this.setState((prevState) => {
          return { openSearch: !prevState.openSearch }
        });
      }

    render() {  

        let searchClass = (this.state.openSearch ? 'opened': '');
        // {`vote_card_hover${searchClass}`}
        return (            
	<div className="header_main" >
			 {/* <!-- Header top --> */}
		<div className="header-top-area header-top-area-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="header-top-item">
                            <div className="header-left">
                                <ul>
                                    <li>
                                        <i className="flaticon-factory"></i>
                                        <a href="#">
                                            We work with global Industry
                                        </a>
                                    </li>
                                    <li>
                                        <i className="flaticon-mail"></i>
                                        <a href="mailto:hello@robtic.com">
                                            hello@robtic.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="flaticon-phone"></i>
                                        <a href="tel:882658506">
                                            882-658-506
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="header-top-item">
                            <div className="header-right">
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
                </div>
            </div>
        </div>
        {/* <!-- End Header top --> */}
		        {/* <!-- Header Contact --> */}
				<div className="header-contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                            <a href="index.html">
                            <img src={'/assets/img/logo.png'} /> 
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact-item">
                            <ul>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <h4>
                                        <a href="tel:882658506">882-658-506</a>
                                    </h4>
                                    <span>Need help? Make a Call</span>
                                </li>
                                <li>
                                    <i className='bx bx-location-plus'></i>
                                    <h4>New York</h4>
                                    <span>20 Reynolds Neck Str-50121</span>
                                </li>
                                <li>
                                    <i className='bx bx-mail-send'></i>
                                    <h4>
                                        <a href="mailto:hello@robtic.com">hello@robtic.com</a>
                                    </h4>
                                    <span>Send us Email</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="side-nav">
                            <a href="#">Get A Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Header Contact --> */}

        {/* <!-- Start Navbar Area --> */}
        <div className="navbar-area nav-area-two sticky-top">
            {/* <!-- Mobile Device --> */}
            <div className="mobile-nav">
                <a href="index.html" className="logo">
                    <img src={'/assets/img/logo-three.png'} alt="Logo" />
                </a>
            </div>

            {/* <!-- Desktop Device --> */}
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle active">Home <i className='bx bx-chevron-down'></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Home Page One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-2.html" className="nav-link">Home Page Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-3.html" className="nav-link active">Home Page Three</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Pages <i className='bx bx-chevron-down'></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="feature.html" className="nav-link">Feature</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="team.html" className="nav-link">Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="testimonial.html" className="nav-link">Testimonial</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="faq.html" className="nav-link">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="404.html" className="nav-link">404 Error Page</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="terms-and-conditions.html" className="nav-link">Terms & Conditions</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="about.html" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Services <i className='bx bx-chevron-down'></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="service.html" className="nav-link">Services Style One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="service-two.html" className="nav-link">Services Style Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="service-three.html" className="nav-link">Services Style Three</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="service-details.html" className="nav-link">Service Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Projects <i className='bx bx-chevron-down'></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="project.html" className="nav-link">Projects</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="project-details.html" className="nav-link">Project Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Blog <i className='bx bx-chevron-down'></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="blog.html" className="nav-link">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog-details.html" className="nav-link">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="contact.html" className="nav-link">Contact</a>
                                </li>
                            </ul>
                            <div className="side-nav-two">
                                <div className="nav-srh">
                                    {/* <div className="search-toggle"> */}
                                    <div className={'search-toggle ' + searchClass}>
                                        <button className="search-icon icon-search" onClick={this.handleClick}><i className='bx bx-search-alt'></i></button>
                                        <button className="search-icon icon-close"  onClick={this.handleClick}><i className='bx bx-x'></i></button>
                                    </div>
                                    {/* <div className="search-area" > */}
                                    <div className={'search-area ' + searchClass} >
                                        <form>
                                            <input type="text" className="src-input" id="search-terms" placeholder="Search here..." />
                                            <button type="submit" name="submit" value="Go" className="search-icon"><i className='bx bx-search-alt'></i></button>
                                        </form>
                                    </div>
                                </div>
                                <button type="button" className="btn modal-btn" data-toggle="modal" data-target="#myModalRight">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- End Navbar Area --> */}
        {/* <!-- Sidebar Modal --> */}
        <div id="myModalRight" className="modal fade modal-right" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src={'/assets/img/logo-two.png'} alt="Logo" />
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid quas qui minus! Dolor, ad. Odit, ullam perspiciatis nesciunt numquam explicabo, sunt ipsa libero ipsum maiores officia eius reprehenderit exercitationem.</p>
                        <div className="image-area">
                            <h2>Instagram</h2>
                            <div className="row">
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src={'/assets/img/home-three/instagram1.jpg'} alt="Instagram" />
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src={'assets/img/home-three/instagram2.jpg'} alt="Instagram" />
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src={'assets/img/home-three/instagram3.jpg'} alt="Instagram" />
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src={'assets/img/home-three/instagram4.jpg'} alt="Instagram" />
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src={'assets/img/home-three/instagram5.jpg'} alt="Instagram" />
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src={'assets/img/home-three/instagram6.jpg'} alt="Instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="social-area">
                            <h3>Our Social Contact</h3>
                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-facebook' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-twitter' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-linkedin' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-instagram' ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Sidebar Modal --> */}
        </div>
	        
        )  
    }  
}  
export default Header