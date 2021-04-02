import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GihubState from "./context/github/GithubState";
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from "./components/layout/Alert";
import Home from './components/pages/Home';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import NotFound from './components/pages/NotFound';

import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
              <Navbar></Navbar>
              <div className="contaianer">
                <Alert></Alert> 
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User} />
                  <Route component={NotFound} />

                </Switch>
              </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
  

}

export default App;
