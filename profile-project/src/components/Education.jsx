import React from 'react'; 

import { useState, useEffect } from 'react';

export function Education() {
    const [fetchData, setFetchData] = useState()
    useEffect(() => {
        fetch('/api/test')
        .then(response => response.json())
        .then(data => {console.log(data);
        setFetchData(data.get)})
    }, [])

    return(
        <div className='padding-sides-20px'>
            <div>Education</div>
            <div>{fetchData}</div>
        </div>
    )
}