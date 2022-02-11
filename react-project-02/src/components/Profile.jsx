import React from 'react';
import photo from '../photo.JPG';

export function Profile() {
    return(
        <div >
            <img src={photo} alt='Myself' width={300}/>
            <h1 className='headers'>Jackson Chan</h1>
            <h4>Frontend Developer</h4>
        </div>
    )
}