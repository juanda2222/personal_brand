
import React from "react";
import "./BackgroundContainer.css";


const BackgroundContainer = props => (    
    <div className="custom_header_container" >
        
        <div className="darkener_layer fade-in-bottom">
            {props.children}
        </div>
    </div>
);

export default BackgroundContainer;




