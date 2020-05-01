import React from 'react';
import './App.css';

import Home from './pages';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checklist from './pages/checklist';

function App() {
  return (
    <Router>
      <Switch> 
        <Route path='/checklist'>
                <Checklist />
        </Route>
        <Route path='/'>
                <Home />
        </Route> 
      </Switch>
    </Router>     

  );
}

export default App;
