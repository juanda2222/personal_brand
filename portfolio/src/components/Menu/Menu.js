import React, { Component } from 'react';

import TopMenu from './TopMenu/TopMenu';
import SideMenu from './SideMenu/SideMenu';

import "./Menu.css"

//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

class Menu extends Component {
  state = {
    sideMenuOpen: false,
    current_index: this.props.i_active,
  };

  listenScrollEvent = e => {
    let introduction_banner_offset = document.getElementById("introduction_banner_pointer").offsetTop;
    let projects_banner_offset = document.getElementById("projects_banner_pointer").offsetTop;
    let about_banner_offset = document.getElementById("about_banner_pointer").offsetTop;
    console.log(introduction_banner_offset )
    console.log(projects_banner_offset )
    console.log(about_banner_offset )

    //change the menu aperance when scrolled between sections
    if ((window.scrollY >= introduction_banner_offset) && (window.scrollY < projects_banner_offset)){
      this.setState({current_index: 0})
    
    }else if ((window.scrollY >= projects_banner_offset) && (window.scrollY < about_banner_offset)){
      this.setState({current_index: 1})
    
    }else if (window.scrollY >= about_banner_offset){
      this.setState({current_index: 2})
    }
    console.log(window.scrollY)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  menuList = () => {
    let i = this.state.current_index 
    console.log(i)
    return (
    <ul id="menu_list" onClick={this.backdropClickHandler}>
          
      <li><Link className={i===0 ? "active" : ""} to="/#home_pointer">Home</Link></li>
      <li><Link className={i===1 ? "active" : ""} to="/#projects_banner_pointer">Projects</Link></li>
      <li><Link className={i===2 ? "active" : ""} to="/#about_banner_pointer">About</Link></li>
      <li><Link className={i===3 ? "active" : ""} to="/contact">Contact</Link></li>
      <li><Link className={i===4 ? "active" : ""} to="/donate">Donate</Link></li>
      
    </ul>
  )}

  render() {
    
    
    return (
      <div>
        <TopMenu menuClickHandler={()=>{this.setState({sideMenuOpen: true})}}>
          {this.menuList()}
        </TopMenu>
        <SideMenu 
          backdropClickHandler={()=>{this.setState({sideMenuOpen: false})}}
          show={this.state.sideMenuOpen}>
          {this.menuList()}
        </SideMenu>
        
      </div>
    );
  }
}

export default Menu;
