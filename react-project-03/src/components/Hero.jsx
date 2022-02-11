import React from 'react'; 
import heroIMG from '../images/heroIMG.png'

export function Hero() {
    return(
        <div className='hero-container'>
            <img className='hero-img padding-10px box-sizing-border-box' src={heroIMG} alt='hero-img'></img>
            <h1 className="hero-h1">Online Experiences</h1>
            <p className='hero-p'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
        
    )
}