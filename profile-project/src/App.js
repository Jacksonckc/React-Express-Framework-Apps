import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { Contact, AboutMe, Home, Experience, Education } from './imports';
import './css/App.css'

export default function App() {
  React.useEffect(() => {
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

  function toggleMenu() {
    let allLis = document.getElementsByClassName('app-navbar')[0].childNodes
    allLis.forEach(li => li.classList.toggle('showMenu'))
  }
  return (
    <Router>
      <div>
        <ul className='app-navbar'>
          <button className='toggle-button' onClick={toggleMenu}>
            =
          </button>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/experience">
            <Experience/>
          </Route>
          <Route exact path="/education">
            <Education/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}