import React, { Component } from 'react';

import TopMenu from './TopMenu/TopMenu';
import SideMenu from './SideMenu/SideMenu';

import "./Menu.css"

import { Link } from 'react-router-dom';

class Menu extends Component {
  state = {
    sideMenuOpen: false,
  };

  menuClicked = (e) => {
  }

  menuList = (i_active) => {
    
    console.log(i_active)
    return (
    <ul id="menu_list" onClick={this.backdropClickHandler}>
          
      <li><Link className={i_active===0 ? "active" : ""} to="/">Home</Link></li>
      <li><Link className={i_active===1 ? "active" : ""} to="/projects">Projects</Link></li>
      <li><Link className={i_active===2 ? "active" : ""} to="/about">About</Link></li>
      <li><Link className={i_active===3 ? "active" : ""} to="/contact">Contact</Link></li>
      <li><Link className={i_active===4 ? "active" : ""} to="/donate">Donate</Link></li>
      
    </ul>
  )}

  render() {
    
    
    return (
      <div>
        <TopMenu menuClickHandler={()=>{this.setState({sideMenuOpen: true})}}>
          {this.menuList(this.props.i_active)}
        </TopMenu>
        <SideMenu 
          backdropClickHandler={()=>{this.setState({sideMenuOpen: false})}}
          show={this.state.sideMenuOpen}>
          {this.menuList(this.props.i_active)}
        </SideMenu>
        
      </div>
    );
  }
}

export default Menu;
