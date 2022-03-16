import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export function NestedRoute() {
  let path = useRouteMatch();
  return (
    <Router>
        <div id="experience-page" className='padding-sides-20px'>  
        <h2>Different Routes</h2>
        
        <ul>
            <li>
            <Link to={`${path.url}/first`}>
              First Route
              </Link>
            </li>
            <li>
              <Link to={`${path.url}/second`}>
                Second Route
              </Link>
            </li>
        </ul>

        <Switch>
            <Route path={`${path.path}/:route`}>
              <Type />
            </Route>
            <Route path={path.path}>
              <h3>Nested Routes</h3>
            </Route>
        </Switch>
        </div>
    </Router>
  );
}

function Type() {
const params = useParams();
  return <h3>{JSON.stringify(params.route)}</h3>;
}