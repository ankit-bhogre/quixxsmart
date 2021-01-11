import React, { Component, Suspense } from 'react'; 
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
export class Airductcleaning extends Component {  
    render() {  
        return (  
            <div>  
                <Header />
                <div className="inner_page_top_img">
					<div className="page_name">
						<h1>Air Duct Cleaning</h1>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
							  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
							  <li className="breadcrumb-item active" aria-current="page">Air Duct Cleaning</li>
							</ol>
						  </nav>
					</div>
					<div className="i_p_img"><img alt="Air Duct Cleaning" className="w-100 img-fluid" src="./assets/images/bg_3.png" /></div>
				</div>
				<section className="best_in">
					<div className="container">		
						<div className="row">
							<div className="col-md-5 col-sm-12">
								<div className="best_in_img"><img className="man_best img-fluid" alt="" src="./assets/images/air_duct_home.png" /></div>
							</div>
							<div className="col-md-7 col-sm-12">
								<div className="best_in_info">
									<div className="title">
										<h1>Air Duct Cleaning</h1>
										<h5 className="mt-3 mb-3">Your loved ones deserve clean, fresh and purified air.</h5>
									</div>
									<p className="mb-4">If your home had a circulatory system like our body, it would be the Air Duct. Over time, Air Ducts collect a lot of dirt, dust, allergens, pollens, and other pollutants. The air in your home courses through these ducts. This is the same air that you and your family inhale. Ensure that it is clean and unpolluted. Our team of experts will take care of it.</p>
									<div className="title">
										<h1>Why Clean The Air Duct?</h1>
									</div>
									<ul className="fea_points">
										<li>Cleaner air means a healthier environment</li>
										<li>Avoids the pungent odors and unpleasant smell</li>
										<li>Prevents airborne illnesses like bronchial congestion</li>
										<li>Improves the airflow efficiency</li>
										<li>Lesser energy consumption</li>
									</ul>
								</div>
							</div>			
						</div>
						<div className="row">
							<div className="col-md-12 w-100">
								<div className="page_text pt-5"><p>These are some of the most common benefits of Air Duct Cleaning. Our regular clients often tell us about the additional unique positive effects they have seen. We are sure that you will experience them as well as many more positive results!</p>
								<a href="#" className="btn ylw_btn">Schedule Your Air Duct Cleaning Visit Instantly</a></div>
							</div>
						</div>
					</div>
				</section>
				<section className="packages bg-light">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="title">
									<h1>Cleaning Experts At Your Doorstep!</h1>
								</div>
								<div className="tab-pane">
									<div className="ac_packages">
										<div className="ac_pack">
											<div className="pack_img"><img className="img-fluid" alt="" src="./assets/images/ac_pack1.png" />
											</div>
											<h3>Air DuctInspection</h3>
											<p>Our Air Duct Cleaning experts will first assess all the ducts in your home and diagnose if there is any problem that needs to be addressed.</p>
										</div>
										<div className="ac_pack">
											<div className="pack_img"><img className="img-fluid" alt="" src="./assets/images/ac_pack2.png" />
											</div>
											<h3>Air Duct cleaning </h3>
											<p>From vacuuming & dislodging the Air Duct with state-of-the-art tools to cleaning the vents, you will witness the hidden dirt from your place being removed.</p>
										</div>
									</div>
									<div className="w-100 text-center mt-4"><Link className="btn ylw_btn" to="/contact">Book a Service</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="FAQ">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="title">
									<h1>Frequently Asked Questions</h1>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="accordion mt-4" id="accordionExample">
									<div className="card">
									  <div className="card-header" id="headingOne">
										<h2 className="mb-0">
										  <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Q. How can I know that your Air Duct Cleaning service is good?
										  </button>
										</h2>
									  </div>
								  
									  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
										<div className="card-body">
											AC Fixing has been in the industry since __ years. Our customers speak for us. Here is what they have to say.
										</div>
									  </div>
									</div>
									<div className="card">
									  <div className="card-header" id="headingTwo">
										<h2 className="mb-0">
										  <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											Q. What can I expect from you as an Air Duct cleaning service provider?
										  </button>
										</h2>
									  </div>
									  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
										<div className="card-body">
											Our professionals will first inspect the system for damages. If they find any hazardous material such as asbestos, they will take all the precautionary actions. They will ensure that your furniture, carpets, and premises would remain cleaned during the process. The team at  
											AC Fixing understands that vacuuming and cleaning the Air Ducts is a delicate task. After cleaning, they will inspect the Air Ducts thoroughly if there is any leakage. 
										</div>
									  </div>
									</div>
									<div className="card">
									  <div className="card-header" id="headingThree">
										<h2 className="mb-0">
										  <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Q. How can I know that our team has done a good job?
										  </button>
										</h2>
									  </div>
									  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
										<div className="card-body">
											If our team does the job perfectly, 
											<ul>
												<li>The entire Air Duct has been examined thoroughly.</li>  
												<li>The entire system will be clean. All the visible parts such as cooling coil, interior ductwork surfaces, registers, grilles, etc. will be clean.</li><li>The system has been sealed off and assessed for leakage.</li>
											</ul>
											If you feel any more cleaning is required, you can ask your queries directly to our cleaning experts. They will be more than happy to help you.
										</div>
									  </div>
									</div>
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
export default Airductcleaning