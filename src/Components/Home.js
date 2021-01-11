import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser'; 

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
		 
		   
		 const html  = '<p>rst</p>';
        return (  
        <div> <Header /> </div>
        )  
    }  
}  
export default Home