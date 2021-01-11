import React, { Component, Suspense } from 'react'; 
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
export class Maintenance extends Component {  
    render() {  
        return (  
            <div>  
                <Header />
                <div className="inner_page_top_img">
					<div className="page_name">
						<h1>AC Maintenance</h1>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
							  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
							  <li className="breadcrumb-item active" aria-current="page">AC Maintenance</li>
							</ol>
						  </nav>
					</div>
					<div className="i_p_img"><img alt="AC maintenance" className="w-100 img-fluid" src="./assets/images/bg_2.png" /></div>
				</div>
				<section className="best_in">
					<div className="container">
						<div className="row">
							<div className="col-md-5 col-sm-12">
								<div className="best_in_img"><img className="man_best img-fluid" alt="" src="./assets/images/welcome_img.png" /></div>
							</div>
							<div className="col-md-7 col-sm-12">
								<div className="best_in_info">
									<div className="title">
										<h1>Need Help With Your Air Condition?</h1>
										<h5 className="mt-3 mb-3">Expert Service At Your Doorstep</h5>
									</div>
									<p className="mb-4">Every Air Condition needs regular maintenance and servicing. We understand that repairing or replacing it can be a very expensive and tedious process. Therefore, our team of experts at AC Fixing ensures the high-quality and cost-effective servicing of your Air Condition.</p>
									<div className="title">
										<h1>Does My AC Need Fixing?</h1>
									</div>
									<ul className="fea_points">
										<li>Is your AC blowing out warm air?</li>
										<li>Are the unusual noises from your AC annoying you?</li>
										<li>Has your AC started stinking when turned on?</li>
										<li>Is the thermostat not showing you the correct temperature?</li>
										<li>Is your AC machine raining? </li>
										<li>Do you see an unusual rise in your electric bill?</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 w-100">
								<div className="page_text pt-5"><p>It looks like your AC needs servicing. If it is not serviced in time, dust will keep accumulating on the condenser. A choked condenser can lead to compressor failure. Uncleaned air filters will continue blowing warmer air. It will harm the entire machine. </p><p>Our servicing doctors will explain to you more about it while cleaning the condenser. But, right now, your AC needs servicing!</p>
								<Link to="#" className="btn ylw_btn">Schedule The Servicing For Your AC Instantly</Link></div>
							</div>
						</div>
					</div>
				</section>
				<section className="packages bg-light">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="title">
									<h1>Your Cooling Experts Are Here To Help!</h1>
								</div>
								<div className="tab-pane">
									<div className="ac_packages">
										<div className="ac_pack">
											<div className="pack_img"><img className="img-fluid" alt="" src="./assets/images/ac_pack1.png" />
											</div>
											<h3>AC Repairing</h3>
											<p>It becomes frustrating when the Air Condition stops working. Whether it is your workplace or home, our experts will come for rescue at earliest.</p>
										</div>
										<div className="ac_pack">
											<div className="pack_img"><img className="img-fluid" alt="" src="./assets/images/ac_pack2.png" />
											</div>
											<h3>AC maintenance Services</h3>
											<p>Air Condition maintenance is vital to preserving its health and avoiding damage. Our team will also help you learn quick hacks to increase the AC lifespan.</p>
										</div>
										<div className="ac_pack">
											<div className="pack_img"><img className="img-fluid" alt="" src="./assets/images/ac_pack3.png" />
											</div>
											<h3>AC Installation Services</h3>
											<p>From the washing of air-cond filters to the assessment of every component of the system, our servicing experts ensure that no part is left unattended.</p>
										</div>
									</div>
									<div className="w-100 text-center mt-4"><a className="btn ylw_btn" href="/">Book a Service</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section className="works">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="title">
									<h1>Every AC Deserves Regular Servicing</h1>
									<p>We need regular health checkups and so do our AC machines. Regular professional servicing increases the lifespan of the machine while eliminating the chances of wear and tear. </p>
								</div>
								<div className="fea_boxes">
									<div className="fea_box">Improved efficiency</div>
									<div className="fea_box">Lowered electricity bill</div>
									<div className="fea_box">Avoid the expense of repairs</div>
									<div className="fea_box">Fresher air to breathe</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="best_in">
					<div className="container">
						<div className="row">
							<div className="col-md-5 col-sm-12">
								<div className="video_box"><img className="img-fluid" alt="" src="./assets/images/video_demo.jpg" /></div>
							</div>
							<div className="col-md-7 col-sm-12">
								<div className="best_in_info">
									<div className="title"><h1>Cleaner Air For Your Family!</h1></div>
									<p>With extensive experience working with Air Conditions of different brands, we promise health to your AC and excellent service to you. Feel free to reach out to us anytime your AC goes on the blink. Our experts will be there toget your AC running in no time.</p>
									<p>Not sure whether your AC is alright?</p>
									<p>Contact Us To Know About Your Air Condition’s Health Status</p>
								<Link to="/contact" className="btn ylw_btn">Contact Us Now!</Link>
								</div>
							</div>
							
						</div>
					</div>
				</section>
				<Footer />  
            </div>  
        )  
    }  
}  
export default Maintenance