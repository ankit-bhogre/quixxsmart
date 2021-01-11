import React from 'react';
import ReactDOM from 'react-dom';

const text = 'Welcome to React Environment';
const App = function(){
    return <div>{text}</div>;
};

// Parent Component 
class Parent extends React.Component{ 
    render(){ 
        return( 
                <div> 
                    <h2>You are inside Parent Component</h2> 
                    <Child name="Ankit Bhogre" phoneno = "7223055521"/> 
                    <Child name="Chanda Patekar" phoneno = "7047304927"/> 
                </div> 
            ); 
    } 
} 
  
// Child Component 
class Child extends React.Component{ 
    render(){ 
        return( 
                <div> 
                    <h2>Hello, {this.props.name} - {this.props.phoneno}</h2>
                </div> 
            ); 
    } 
} 

ReactDOM.render(<Parent/>,document.querySelector('#root'));