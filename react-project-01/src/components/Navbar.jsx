import React from 'react';
import logo from '../logo.svg';

export default function Navbar() {
    return(
        <div className="header-container">
           
                <img src={logo} className="App-logo" alt="logo" />
                <h2>ReactFacts</h2>
    
            
            <h3>React Course - Project 1</h3>
        </div>
    )
}