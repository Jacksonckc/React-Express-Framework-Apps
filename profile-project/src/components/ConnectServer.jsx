import React from 'react'; 

import { useState, useEffect } from 'react';

export function ConnectServer() {
    const [fetchData, setFetchData] = useState()
    useEffect(() => {
        fetch('/api/test')
        .then(response => response.json())
        .then(data => {
          data && console.log('data is here');
          setFetchData(data)})
    }, [])

    useEffect(() => {
        fetch('/api/test', { 
          body: JSON.stringify({ input: 'hi there' }), 
          headers: { 'content-type': 'application/json' }, 
          method: 'POST' })
          .then(
            response => {
              return response.json()
            })
            .then(data => console.log(data))
      }, [])

    return(
        <div className='padding-sides-20px'>
            <h2>Server Data</h2>
            {fetchData && console.log(fetchData)}
            {fetchData && <div>{fetchData.score}</div>}
        </div>
    )
}