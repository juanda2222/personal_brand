import React, { Component } from 'react';

//import Menu from './Menu/Menu.js';
import animated_robot from '../assets/robot-animated.gif'
//import Footer from "./Footer/Footer"

import { MdError } from 'react-icons/md';



const styles = {
  error_container:{
    flex:1,
    background: "#333",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    
  },

  row_container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
    color: "#fff",
  },    
  icon:{
    padding: "0 10px 0 10px",
  }
}


class ErrorScreen extends Component {

  render() {
    return (  
          <div className="full_window centered" style={styles.error_container}>
            <img  width="20%" src={animated_robot} alt="loading..."/>
            <div style={styles.row_container}>
              <MdError style={styles.icon}/>
              <h3 style={{color:"#fefefe"}}>Ups! this page does not exist</h3>  
            </div>
          </div>
      
      
    );
  }
}



export default ErrorScreen;
