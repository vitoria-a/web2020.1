import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import Create from './components/Create';
import List from './components/List';

export default class App extends Component{
  render() {
    return(
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link to={'/'} className='navbar-brand'> ATIVIDADE 03 - CRUD</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/create'} className='nav-link'>Create</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/list'} className='nav-link'>List</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/create' component={Create}/>
            <Route path='/list' component={List}/>
          </Switch>
        </div>
      </Router>
    )
  }
}