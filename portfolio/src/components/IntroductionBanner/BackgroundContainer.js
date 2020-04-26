
import React from "react"
import "./BackgroundContainer.css"


const BackgroundContainer = props => (    
    <div id="home" className="custom_header_container" >
        <div className="darkener_layer">
            {props.children}
        </div>
    </div>
);

export default BackgroundContainer;




