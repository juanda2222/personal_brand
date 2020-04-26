import React, { Component } from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomeScreen from "./components/HomeScreen.js";
import ProjectsScreen from "./components/ProjectsScreen.js";
import ErrorScreen from "./components/ErrorScreen.js";



class App extends Component {

  render() {
    return (
      
      <Switch>
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/projects" component={ProjectsScreen} />
        <Route path="/contact" component={ProjectsScreen} />
        <Route component={ErrorScreen} />
      </Switch>
      
    );
  }
}

export default App;
