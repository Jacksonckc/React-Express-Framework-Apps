import React from 'react';
import photo from '../images/photo.JPG'
import '../css/AboutMe.css'

export function AboutMe() {
    return (
        <div className='padding-sides-20px'>
            <div>About Me</div>
            <img src={photo} className="about-me-photo" alt='A pic of me'></img>
        </div>
    )
}