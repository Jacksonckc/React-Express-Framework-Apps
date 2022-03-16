import React from 'react';

export function Authentication() {
    return (
        <div className='padding-sides-20px'>
            <h2>Authentication</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {/* <form action='./'>
                <label for="username">First name:</label>
                <input type="text" id="username" name="username" value="example35" /><br/>
                <label for="password">Last name:</label>
                <input type="password" id="password" name="password" value="xxxxxxxxxx" /><br/>
                <input type="submit" value="Submit" />
            </form>  */}
        </div>
    )
}