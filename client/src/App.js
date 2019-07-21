import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Nav';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NotFound from './pages/NotFound'


const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

export default App;
