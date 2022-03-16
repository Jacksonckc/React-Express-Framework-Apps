import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';

export function Axios() {
    const [persons, setPersons] = useState()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            console.log(response.data);
            setPersons(response.data)
        })
    },[])
    
    return (
        <div className='padding-sides-20px'>
            <h2>Axiosed Data</h2>
            <div>{persons?.map(person => <div key={person.id}>{person.name}</div>)}</div>
        </div>
    )
}