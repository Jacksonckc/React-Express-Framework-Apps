import axios from 'axios';
import React from 'react';
import { useQuery, useSession } from '../imports';


export function Authentication() {
    const query = useQuery()
    const {isLoggedIn, reloadCookie} = useSession()
    return (
        <div className='padding-sides-20px'>
            {isLoggedIn ? 
                <>
                    <button type='button' onClick = {() => {axios('/logout').then(reloadCookie)}}>Log Out</button>
                </>:
                <>  
                    <h2>Authentication</h2>
                    <form method='post' action='/login'>
                        <label>
                            User Name:<br/>
                            <input type="text" name="username" />
                        </label>
                        <br/>
                        <label>
                            Password:<br/>
                            <input type="password" name="password" />
                        </label>
                        <br/>
                        <input type="submit" value="Submit" />
                    </form>
                    {query.get('login') === 'false' && <div>Something is wrong, try another account.</div>}
                </>
            }
        </div>
    )
}