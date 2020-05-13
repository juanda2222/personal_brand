import React, { Component,  } from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap default ib

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
//import ProjectsScreen from "./components/ProjectsScreen.js";
import DonateScreen from "./components/DonateScreen.js";
import ContactScreen from "./components/ContactScreen.js"
import ErrorScreen from "./components/ErrorScreen.js";
//import Footer from "./components/Footer/Footer"
//import Menu from "./components/Menu/Menu"

//material ui styling wrappers:
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const port = process.env.REACT_APP_NODE_PORT ? process.env.REACT_APP_NODE_PORT : 1000
const domain = process.env.REACT_APP_PRODUCTION ==="true" ? "https://david.alfagenos.com": "http://localhost:"+port

const api_list = ["/ping"]

// Create my own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b6180'
    },
    secondary: {
      main: '#0C445C'
    }
  }
});


export default class App extends Component {

  
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      menu_index:0
    }
    //console.log(">> path: ", text)
    if ( (typeof window !== 'undefined') && (api_list.indexOf(window.location.pathname) !== -1) ) {
      console.log("redirecting...")
      window.location.href = domain+"/ping";
    }
  }

  render() {
    
    return (
      <MuiThemeProvider theme={theme}>
    
        <BrowserRouter>
          <ReactNotification/>
          <Switch>
            {/*<Route path='/ping' 
                component={Redirect}
                loc={domain+"/ping"}
            />*/}          
            <Route path="/" render={() => <HomeScreen user={"user"} />} exact/>
            {/*<Route path="/projects" component={ProjectsScreen} />*/}
            <Route path="/contact" component={ContactScreen} />
            <Route path="/donate" component={DonateScreen} />
            <Route path="/*" component={ErrorScreen}/>
            {/*<Redirect to="/error"/>*/}
          </Switch>
          {/*<Redirect from= "*" to="/error"/>*/}
        </BrowserRouter>
      </MuiThemeProvider>  
      );
  }
}
