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
    
    //the access the elements fails if the page containing them is not loaded:
    if (document.getElementById("home_screen")) {

      let introduction_banner_offset = document.getElementById("home_screen").offsetTop;
      let projects_banner_offset = document.getElementById("projects_banner_pointer").offsetTop;
      let about_banner_offset = document.getElementById("about_banner_pointer").offsetTop;
      let scroll_pos = window.scrollY
      //console.log(introduction_banner_offset )
      //console.log(projects_banner_offset )
      //console.log("about pos: "+about_banner_offset)
      //console.log("scroll pos: "+scroll_pos)
      

      //change the menu aperance when scrolled between sections 58px is the he  ight of the tittle
      if ((scroll_pos >= introduction_banner_offset) && (scroll_pos < projects_banner_offset)){
        this.setState({current_index: 0})
      
      }else if ((scroll_pos >= projects_banner_offset - 10) && (scroll_pos < about_banner_offset - 10)){
        this.setState({current_index: 1})
      
      }else if (scroll_pos >= about_banner_offset - 10){
        this.setState({current_index: 2})
      }
    }
  }

  componentDidMount() {

    //renders the colors based on the url:
    //console.log("href url: "+window.location.pathname)
    let url = window.location.pathname // pathname if after the domain
    if (url.length === 1){
      //console.log("--- root in")
      this.setState({current_index: 0})
    }else if (url.includes("contact")){
      //console.log("--- contact in")
      this.setState({current_index: 3})
    } else if (url.includes("donate")){
      //console.log("--- donate in")
      this.setState({current_index: 4})
    } 

    window.addEventListener('scroll', this.listenScrollEvent)
  }
  componentWillUnmount() {

    //renders the colors based clean the event listeners:
    window.removeEventListener('scroll', this.listenScrollEvent)
  }


  menuList = () => {
    let i = this.state.current_index 

    return (
      <ul id="menu_list" onClick={() => {}}>
          
      <li><Link onClick={() => { this.setState({sideMenuOpen: false, current_index: 0}) }} className={i===0 ? "active" : ""}
         to="/#top_pointer">Home</Link></li>
      <li><Link onClick={() => { this.setState({sideMenuOpen: false, current_index: 1}) }} className={i===1 ? "active" : ""}
         to="/#projects_banner_pointer">Projects</Link></li>
      <li><Link onClick={() => { this.setState({sideMenuOpen: false, current_index: 2}) }} className={i===2 ? "active" : ""}
         to="/#about_banner_pointer">About</Link></li>
      <li><Link onClick={() => { this.setState({sideMenuOpen: false, current_index: 3}) }} className={i===3 ? "active" : ""}
         to="/contact#top_pointer">Contact</Link></li>
      <li><Link onClick={() => { this.setState({sideMenuOpen: false, current_index: 4}) }} className={i===4 ? "active" : ""}
         to="/donate#top_pointer">Donate</Link></li>
      
    </ul>
  )}

  /*<Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
    </Nav>*/

  render() {
    
    
    return (
      <div>
        <TopMenu menuClickHandler={()=>{
            this.setState({sideMenuOpen: true})
          }}>
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
