import React, { Component, Suspense } from 'react'; 
import Header from './Header' 
import Footer from './Footer' 
//import { Route, Switch, Redirect } from 'react-router-dom';  
export class Contact extends Component {  
    render() {  
        return (  
            <div>  
                <Header />
                Contact us
				<Footer />  
            </div>  
        )  
    }  
}  
  
export default Contact