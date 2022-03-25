import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { Authentication, NestedRoute, ConnectServer, Axios, UsersPage } from './imports';
import './css/App.css'

export default function App() {
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
            <Link to="/">Authentication</Link>
          </li>
          <li>
            <Link to="/axios">Axios</Link>
          </li>
          <li>
            <Link to="/nested/route">Nested Route</Link>
          </li>
          <li>
            <Link to="/connect/server">Connect Server</Link>
          </li>
          <li>
            <Link to="/users/page">Users Page</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Authentication />
          </Route>
          <Route exact path="/axios">
            <Axios />
          </Route>
          <Route exact path="/nested/route">
            <NestedRoute/>
          </Route>
          <Route exact path="/connect/server">
            <ConnectServer/>
          </Route>
          <Route exact path="/users/page">
            <UsersPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}