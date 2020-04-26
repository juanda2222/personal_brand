import React from 'react';

import MenuButton from '../SideMenu/MenuButton';
import './TopMenu.css';



class TopMenu extends React.Component {
  state = {
    menu_classname: 'top_menu'
  }
  listenScrollEvent = e => {
    //console.log(window.innerHeight)
    //console.log(window.scrollY)


    //fix the fixed position

    //manage the color changing in the top menu bar
    if (window.scrollY <= 50) {
      this.setState({ menu_classname: "top_menu" })//visible with transparent background
    } if ((window.scrollY > 50) && (window.scrollY < window.innerHeight-50)) {
      this.setState({ menu_classname: "top_menu transparent" }) //totally invisible
    } if (window.scrollY >= window.innerHeight-100) {
      this.setState({ menu_classname: "top_menu mate" })//with mamte background
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <nav className={this.state.menu_classname}>
        <div className="toggle_button">{/* it hides if the size is to big */}
          <MenuButton click={this.props.menuClickHandler} />
        </div>
        <div className="menu_items_wraper">
          {this.props.children}
        </div>
      </nav>
    )
  }
}


export default TopMenu;
