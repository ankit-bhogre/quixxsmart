import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import logoimg from process.env.PUBLIC_URL +'/assets/img/logo.png';
export class Home extends Component { 

	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  cms_data: []
		}
	  }
 	  
	async componentDidMount() {
		//const response = await fetch('http://localhost/myshoetips/api/home_cms');
		//const result = await response.json();
		//this.setState({ cms_data: result });
	}
	 

    render() {  
        return (  
        <div> 
			<Header /> 

		<div className="home_main">
        {/* <!-- Banner --> */}
        <div className="banner-area banner-img-three">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1>We Are The Best Robotic Maker Industry Factory </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendis</p>
                            <a className="cmn-btn" href="#">
                                Discover More
                                <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Banner --> */}
        {/* <!-- About --> */}
        <section className="about-area about-area-three ptb-100">
            <div className="container">
                <div className="row align-iems-center">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <span className="sub-title">About Us</span>
                            <h2>Design, Simulate, and Control Your Robotic System with the Action SDK</h2>
                        </div>
                        <div className="about-content">
                            <p>‘’Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo’’</p>
                            <ul>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Full-Service Electrical Layout Design
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Writing And Installation
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Emergency Power Solution
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Virtually Industrial Robotic Need You Have
                                </li>
                            </ul>
                            <img src={'assets/img/home-one/about-man.png'} alt="About" />
                            <img src={'assets/img/home-one/about-signature.png'} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img-wrap">
                            <div className="about-img-slider owl-theme owl-carousel">
                                <div className="about-img-item">
                                    <img src={'assets/img/home-one/about1.jpg'} alt="About" />
                                </div>
                                <div className="about-img-item">
                                    <img src={'assets/img/home-one/about2.jpg'} alt="About" />
                                </div>
                                <div className="about-img-item">
                                    <img src={'assets/img/home-one/about4.jpg'} alt="About" />
                                </div>
                                <div className="about-img-item">
                                    <img src={'assets/img/home-one/about5.jpg'} alt="About" />
                                </div>
                            </div>
                            <div className="about-shape">
                                <img src={'assets/img/home-one/about2.png'} alt="About" />
                                <img src={'assets/img/home-one/about3.jpg'} alt="About" />
                                <img src={'assets/img/home-one/about4.png'} alt="About" />
                                <img src={'assets/img/home-one/about5.png'} alt="About" />
                            </div>
                            <div className="about-year">
                                <h2>35 <span>Years</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End About --> */}
        {/* <!-- Service --> */}
        <section className="service-area-two pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Services</span>
                    <h2>Services We Offer You From Our <span>Company</span></h2>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <i className="flaticon-mechanical-arm"></i>
                            <h3>
                                <a href="service-details.html">Industrial Robot</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                            <a className="service-link" href="service-details.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <i className='bx bx-bulb'></i>
                            <h3>
                                <a href="service-details.html">Unique Technology</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                            <a className="service-link" href="service-details.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <i className="flaticon-automation"></i>
                            <h3>
                                <a href="service-details.html">Automation Industry</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                            <a className="service-link" href="service-details.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <i className="flaticon-lab-tool"></i>
                            <h3>
                                <a href="service-details.html">Chemical Research</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                            <a className="service-link" href="service-details.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <i className="flaticon-oil-drill"></i>
                            <h3>
                                <a href="service-details.html">Oil & Gas Industry</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                            <a className="service-link" href="service-details.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <i className="flaticon-robotic-arm"></i>
                            <h3>
                                <a href="service-details.html">Mechanical Works</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                            <a className="service-link" href="service-details.html">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Service --> */}
        {/* <!-- Benefit --> */}
        <section className="benefit-area benefit-area-two benefit-area-three ptb-100">
            <div className="container-fluid">
                <div className="row m-0">
                    <div className="col-lg-7">
                        <div className="benefit-content">
                            <div className="section-title">
                                <h2>Get Benefits of Using Latest Artificial Intelligence Technologies.</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <div className="row m-0">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="benefit-inner">
                                        <i className="flaticon-darts"></i>
                                        <h4>Complete Technology Partner</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="benefit-inner">
                                        <i className="flaticon-customer"></i>
                                        <h4>Backed By 100% Customer References</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="benefit-inner">
                                        <i className="flaticon-security-purposes"></i>
                                        <h4>Fast, Scalable, & Reliable</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="benefit-inner">
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h4>The Emerging Tech Exparts</h4>
                                    </div>
                                </div>
                            </div>
                            <a className="cmn-btn" href="#">
                                Know Details
                                <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="benefit-img-two">
                            <img src={'assets/img/home-three/benefit-main.jpg'} alt="Benefit" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Benefit --> */}


        {/* ---------- */}

        {/* <!-- Offer --> */}
        <section className="offer-area offer-area-two pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Project</span>
                    <h2>Robotic Project Cases</h2>
                </div>
                {/* *********************************************************** */}
                {/* // className "owl-theme" is optional */}
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        
                    >
                        <div class="item"> <img src={'assets/img/home-three/project1.jpg'} alt="Offer" /></div>
                        <div class="item"> <img src={'assets/img/home-three/project2.jpg'} alt="Offer" /></div>
                        <div class="item"> <img src={'assets/img/home-three/project3.jpg'} alt="Offer" /></div>
                        <div class="item"> <img src={'assets/img/home-three/project1.jpg'} alt="Offer" /></div>
                        <div class="item"><img src={'assets/img/home-three/project2.jpg'} alt="Offer" /></div>
                        <div class="item"><img src={'assets/img/home-three/project3.jpg'} alt="Offer" /></div>
                        <div class="item"><img src={'assets/img/home-three/project2.jpg'} alt="Offer" /></div>
                    </OwlCarousel>


                {/* *********************************************************** */}
                <div className="offer-slider owl-theme owl-carousel">
                    <div className="offer-item">
                        <div className="offer-top">
                            <img src={'assets/img/home-three/project1.jpg'} alt="Offer" />
                        </div>
                        <div className="offer-bottom">
                            <h3>
                                <a href="#">Construction & Demolition</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                            <a className="offer-link" href="#">Read More
                                <i className='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-top">
                            <img src={'assets/img/home-three/project2.jpg'} alt="Offer" />
                        </div>
                        <div className="offer-bottom">
                            <h3>
                                <a href="#">Automation Technology</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                            <a className="offer-link" href="#">Read More
                                <i className='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-top">
                            <img src={'assets/img/home-three/project3.jpg'} alt="Offer" />
                        </div>
                        <div className="offer-bottom">
                            <h3>
                                <a href="#">Manufacture Industry</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                            <a className="offer-link" href="#">Read More
                                <i className='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-top">
                            <img src={'assets/img/home-three/project1.jpg'} alt="Offer" />
                        </div>
                        <div className="offer-bottom">
                            <h3>
                                <a href="#">Construction & Demolition</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                            <a className="offer-link" href="#">Read More
                                <i className='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-top">
                            <img src={'assets/img/home-three/project2.jpg'} alt="Offer" />
                        </div>
                        <div className="offer-bottom">
                            <h3>
                                <a href="#">Automation Technology</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                            <a className="offer-link" href="#">Read More
                                <i className='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-top">
                            <img src={'assets/img/home-three/project3.jpg'} alt="Offer" />
                        </div>
                        <div className="offer-bottom">
                            <h3>
                                <a href="#">Manufacture Industry</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                            <a className="offer-link" href="#">Read More
                                <i className='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-top">
                            <img src={'assets/img/home-three/project2.jpg'} alt="Offer" />
                        </div>
                        <div className="offer-bottom">
                            <h3>
                                <a href="#">Automation Technology</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                            <a className="offer-link" href="#">Read More
                                <i className='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Offer --> */}

        {/* <!-- Job --> */}
        <div className="job-area job-area-two">
            <div className="container-fluid">
                <div className="row m-0">
                    <div className="col-lg-6">
                        <div className="job-img">
                            <img src={'assets/img/home-two/job1.jpg'} alt="Job" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="job-content">
                            <div className="section-title">
                                <h2>Enhancing, Not Replacing, Human Jobs</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <ul>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Higher Revenue
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Improved Monitoring
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Lower Cost
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Fast Implementation
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Greater Efficiency
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Better Safety
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Job --> */}

        {/* <!-- Social --> */}
        <div className="social-area social-area-two pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="social-img">
                            <img src={'assets/img/home-three/social-main.jpg'} alt="Social" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="social-content">
                            <div className="section-title">
                                <h2>Solve Your Unique Robotic Challenges</h2>
                            </div>
                            <p>The vision processing solution that uses deep-learning to enable building and depalletizing of mixed-SKU pallets.</p>
                            <a className="cmn-btn" href="#">
                                Know Details
                                <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Social --> */}

        {/* <!-- Testimonial --> */}
        <section className="testimonial-area ptb-100">
            <div className="testimonial-shape">
                <img src={'assets/img/home-two/testimonial-bg.png'} alt="Testimonial" />
            </div>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Testimonial</span>
                    <h2>What Our Clients Say</h2>
                </div>
                <div className="testimonial-slider owl-theme owl-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-top">
                            <i className="flaticon-right-quotation-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan</p>
                        </div>
                        <ul className="align-items-center">
                            <li>
                                <img src={'assets/img/home-two/testimonial1.png'} alt="Testimonial" />
                            </li>
                            <li>
                                <h4>Teresa Mera</h4>
                                <span>Developer</span>
                            </li>
                        </ul>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-top">
                            <i className="flaticon-right-quotation-sign"></i>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                        </div>
                        <ul className="align-items-center">
                            <li>
                                <img src={'assets/img/home-two/testimonial2.png'} alt="Testimonial" />
                            </li>
                            <li>
                                <h4>Alien Meris</h4>
                                <span>Designer</span>
                            </li>
                        </ul>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-top">
                            <i className="flaticon-right-quotation-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan</p>
                        </div>
                        <ul className="align-items-center">
                            <li>
                                <img src={'assets/img/home-two/testimonial1.png'} alt="Testimonial" />
                            </li>
                            <li>
                                <h4>Teresa Mera</h4>
                                <span>Developer</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Testimonial --> */}

        {/* <!-- Blog --> */}
        <section className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">News</span>
                    <h2>Our Latest News</h2>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-8">
                        <div className="blog-item">
                            <a href="blog-details.html">
                                <img src={'assets/img/home-one/blog1.jpg'} alt="Blog" />
                            </a>
                            <span>20 Aug 2020</span>
                            <div className="blog-inner">
                                <h3>
                                    <a href="blog-details.html">Top 10 Robotics Engineering Trends Industrial Robotics</a>
                                </h3>
                                <a className="blog-link" href="blog-details.html">
                                    Read More
                                    <i className='bx bx-plus'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="row">
                            <div className="col-sm-6 col-lg-12">
                                <div className="blog-item active">
                                    <a href="blog-details.html">
                                        <img src={'assets/img/home-one/blog2.jpg'} alt="Blog" />
                                    </a>
                                    <span>21 Aug 2020</span>
                                    <div className="blog-inner">
                                        <h3>
                                            <a href="blog-details.html">Know How The US Cuts Labor Adoption Of Industrial Robots</a>
                                        </h3>
                                        <a className="blog-link" href="blog-details.html">
                                            Read More
                                            <i className='bx bx-plus'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-12">
                                <div className="blog-item">
                                    <a href="blog-details.html">
                                        <img src={'assets/img/home-one/blog3.jpg'} alt="Blog" />
                                    </a>
                                    <span>22 Aug 2020</span>
                                    <div className="blog-inner">
                                        <h3>
                                            <a href="blog-details.html">Robotics Engineering: 10 Trends Shaping The Industrial Robotics For</a>
                                        </h3>
                                        <a className="blog-link" href="blog-details.html">
                                            Read More
                                            <i className='bx bx-plus'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Blog --> */}

        {/* <!-- Logo --> */}
        <div className="logo-area logo-area-two pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="logo-item">
                            <img src={'assets/img/home-two/logo/logo1.png'} alt="Logo" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="logo-item">
                            <img src={'assets/img/home-two/logo/logo2.png'} alt="Logo" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="logo-item">
                            <img src={'assets/img/home-two/logo/logo3.png'} alt="Logo" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="logo-item">
                            <img src={'assets/img/home-two/logo/logo4.png'} alt="Logo" />
                        </div>
                    </div>
                    <div className="offset-3 offset-md-0 col-lg-5">
                        <div className="logo-item">
                            <img src={'assets/img/home-two/logo/logo5.png'} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Logo --> */}

			</div>
			<Footer />
	   </div>
        		)  
	
	
    }  
}  
export default Home