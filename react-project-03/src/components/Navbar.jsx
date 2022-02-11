import React from 'react';
import airbnbIMG from '../images/airbnb-logo.png'

export function Navbar() {
    return(
        <div className='navbar-container padding-10px'>
            <img src={airbnbIMG} alt="airbnbIMG" className='navbar-airbnb-img padding-10px'/>
            <h2 className='padding-10px'>airbnb</h2>
        </div>
    )
}