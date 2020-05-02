import React, { Component,  } from 'react';

import './App.css';

import {
  BrowserRouter,
  Route, 
  Switch, 
  //Redirect, 
} from 'react-router-dom';

import HomeScreen from "./components/HomeScreen.js";
import ProjectsScreen from "./components/ProjectsScreen.js";
import ContactScreen from "./components/ContactScreen.js"
import ErrorScreen from "./components/ErrorScreen.js";
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"



class App extends Component {

  state = {
    menu_index:0
  }
  render() {
    return (
      
      <BrowserRouter>
        <Menu />
        <Switch>
        
          <Route path="/" render={() => <HomeScreen user={"user"} />} exact/>
          {/*<Route path="/projects" component={ProjectsScreen} />*/}
          <Route path="/contact" component={ContactScreen} />
          <Route path="/donate" component={ProjectsScreen} />
          <Route path="/*" component={ErrorScreen}/>
          {/*<Redirect to="/error"/>*/}
        </Switch>
        <Footer/> 
        {/*<Redirect from= "*" to="/error"/>*/}
      </BrowserRouter>
        
      );
  }
}

export default App;
