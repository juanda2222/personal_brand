import React, { Component,  } from 'react';

import './App.css';

import {
  BrowserRouter,
  Route, 
  Switch, 
  //Redirect, 
} from 'react-router-dom';

import ReactNotification from 'react-notifications-component';
import "../node_modules/react-notifications-component/dist/theme.css";
import 'react-notifications-component/dist/theme.css'

import HomeScreen from "./components/HomeScreen.js";
import ProjectsScreen from "./components/ProjectsScreen.js";
import ContactScreen from "./components/ContactScreen.js"
import ErrorScreen from "./components/ErrorScreen.js";
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"

const port = process.env.REACT_APP_NODE_PORT ? process.env.REACT_APP_NODE_PORT : 1000
const domain = process.env.REACT_APP_PRODUCTION ==="true" ? "david.alfagenos.com": "http://localhost:"+port

class App extends Component {

  state = {
    menu_index:0
  }
  render() {
    let text = window.location.pathname
    console.log(">> path: ", text)

    return ( 
      <BrowserRouter>
        <ReactNotification/>
        <Menu />
        <Switch>

          {/* rute all the outside apis that returns user content: */}
          <Route path='/ping' component={() => { 
            window.location.href = "facebook.com"; 
            return null;
          }}/>

          {/* rute all internal composition of the page: */}
          <Route path="/" render={() => <HomeScreen user={"user"} />} exact/>
          {/*<Route path="/projects" component={ProjectsScreen} />*/}
          <Route path="/contact" component={ContactScreen} />
          <Route path="/donate" component={ProjectsScreen} />
          <Route path="/*" component={ErrorScreen}/>
        </Switch>
        <Footer/> 
        {/*<Redirect from= "*" to="/error"/>*/}
      </BrowserRouter>
        
      );
  }
}

export default App;
