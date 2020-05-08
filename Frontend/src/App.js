import React, { Component,  } from 'react';

import './App.css';

import {
  BrowserRouter,
  Route, 
  Switch, 
  Redirect, 
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
const domain = process.env.REACT_APP_PRODUCTION ==="true" ? "https://david.alfagenos.com": "http://localhost:"+port
const api_list = ["/ping"]

class App extends Component {

  state = {
    menu_index:0
  }
  componentDidMount(){
    if ( (typeof window !== 'undefined') && (api_list.indexOf(window.location.pathname) !== -1)) {
          window.location.href = "https://facebook.com";
    }
  }
  
  render() {
    //console.log(">> path: ", text)
    
    //if (api_list.indexOf(window.location.pathname) !== -1){
    //  window.location.replace(domain+"/ping")
    //  //window.location.href = domain+"/ping"; //this will reload the page
    //  //history.push('/page-name') // this will mantain the router paradigm
    //  //return <Redirect to={domain+"/ping"}/> // return nothing if the url is from an api
    //}
    return (
      
      <Route path='/ping' 
        component={Redirect}
        loc={domain+"/ping"}
      />
      <BrowserRouter>
        <ReactNotification/>
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
