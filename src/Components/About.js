import React, { Component, Suspense } from 'react'; 
import Header from './Header' 
import Footer from './Footer' 
//import { Route, Switch, Redirect } from 'react-router-dom';  
export class About extends Component {  
    render() {  
        return (  
            <div>  
                <Header />
                About us welcome
				<Footer />  
            </div>  
        )  
    }  
}  
  
export default About