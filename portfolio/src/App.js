import React, { Component } from 'react';

import './App.css';

import {BrowserRouter, Route, Switch, Redirect, } from 'react-router-dom';

import HomeScreen from "./components/HomeScreen.js";
import ProjectsScreen from "./components/ProjectsScreen.js";
import ContactScreen from "./components/ContactScreen.js"
import ErrorScreen from "./components/ErrorScreen.js";
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"



class App extends Component {

  render() {
    return (
      
      <BrowserRouter>
        
        <Switch>
          <Route path="/" component={HomeScreen} exact/>
          {/*<Route path="/projects" component={ProjectsScreen} />*/}
          <Route path="/contact" component={ContactScreen} />
          <Route path="/donate" component={ProjectsScreen} />
          <Route component={ErrorScreen}/>
        </Switch>
        {/*<Redirect from= "*" to="/error"/>*/}
      </BrowserRouter>
      
    );
  }
}

export default App;
