import React from 'react';

import './SideMenu.css';


const SideMenu = (props) => {
  //console.log("rendering")
  let backdrop;
  if (props.show) {
    //this is the shadow that apears when the menu is opened
    backdrop = <div className="backdrop" onClick={props.backdropClickHandler} />
  }
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <div>
      <nav className={drawerClasses}>
        {props.children}
      </nav>
      {backdrop}
    </div>
      
  );
}

export default SideMenu;
