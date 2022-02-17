import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export function Experience() {
  let path = useRouteMatch();
  console.log(path)
  return (
    <Router>
        <div id="experience-page" className='padding-sides-20px'>  
        <h2>My Experience</h2>
        
        <ul>
            <li>
            <Link to={`${path.url}/jobs`}>Jobs</Link>
            </li>
            <li>
            <Link to={`${path.url}/service`}>
                Service
            </Link>
            </li>
        </ul>

        <Switch>
            <Route path={`${path.path}/:type`}>
              <Type />
            </Route>
            <Route path={path.path}>
              <h3>My experiences</h3>
            </Route>
        </Switch>
        </div>
    </Router>
  );
}

function Type() {
const params = useParams();
  return <h3>{JSON.stringify(params.type)}</h3>;
}