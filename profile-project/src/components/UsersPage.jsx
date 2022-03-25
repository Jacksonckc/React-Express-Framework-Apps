import React, { useEffect, useState } from 'react';

export function UsersPage() {
    const [response, setResponse] = useState()
    useEffect(() => {
        fetch('/get/info')
        .then(res => res.json())
        .then(data => {
            setResponse(data);
            console.log(data);
        }
    )},[])
    
    return(
        <>
        {response?.secret}
        </>
    )
}