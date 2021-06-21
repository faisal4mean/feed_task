import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';


let App = () => {
    return (
                <React.Fragment>
                     <Router>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <Link to='/' className="navbar-brand">Social Media Feeds</Link>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to='/feed' className='nav-link'>Feed</Link>
                            </li>
                        </ul>
                    </nav>
                 
                     <Switch>
                         <Route exact path='/feed' component={Feed}/>
                     </Switch>
                  </Router>
                </React.Fragment>
            )
};
export default App;
