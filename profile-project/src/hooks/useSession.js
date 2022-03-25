import { useState } from 'react'
import Cookies from 'js-cookie'

function getCookie() {
    let cookie
    try{ 
        cookie = JSON.parse(Cookies.get('Session'))
        console.log('Hi, you are logged in')
        return cookie
    } 
    catch(err) {
        console.info('You are not logged in')
    }
}

export function useSession() {
    const [cookie, setCookie] = useState(() => getCookie());
    return{isLoggedIn: Boolean(cookie), reloadCookie: () => {setCookie(getCookie())}}
}