import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import Home from './component/Home'
import Users from './component/Users'
import About from './component/About'
import AppNav from './component/Nav'

class App extends Component {
  render() {
  return (
      <Router>
        <div>

          <AppNav />

          <Switch>
            <Route path="/about/:id">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;