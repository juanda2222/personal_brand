
import React, { useState } from "react"

import "./Project.css"
import BeautyButton from '../Buttons/BeautyButton.js';
import project_data from "../../assets/projects/device_monitoring/data"

import { Redirect } from 'react-router-dom';
import { FaFileCode, FaLaptopCode } from 'react-icons/fa';


import ZoomImage from "../ZoomImage/ZoomImage.js"


import 'react-medium-image-zoom/dist/styles.css'

const Project = props => {
    
    //react hook to the redirect state
    const [redirect, set_redirect] = useState(false)

    let source_url = props.project_source ? props.project_source : project_data.source;
    let website_url = props.project_website ? props.project_website : project_data.website;
    let abstract_text = props.abstract ? props.abstract : project_data.abstract
    let hastags_vec = props.hastags_vec ? props.hastags_vec : project_data.hashtags
    let tittle = props.tittle ? props.tittle : project_data.tittle
    let hastags = ""
    hastags_vec.forEach((value)=>{ hastags += "#"+value + ", "}) //creaate the hashtags if the property is not empty

    if (redirect) {
        return <Redirect push to="/projects" />;
    }
    
    return (  
        <div className="proyect_container">
            
            <div className="project_text">
                <h3>{tittle}</h3>
                <p>{hastags}</p>
                <p>{abstract_text}</p>
                <div className="image_bar">
                        
                        <a href={website_url}
                            target="_blank"
                            >
                            <FaLaptopCode className="icon" />
                            
                        </a>    
                        <h3 style={{textsize:"10px"}}>
                            website
                        </h3>
                        
                        <a href={source_url}
                            target="_blank"
                            >
                            <FaFileCode className="icon" />
                        </a>
                        <h3>
                            source
                        </h3>
                </div>
            </div> 
            <div className="project_image">
                <div className="centered">
                    {/*<Zoom>
                        <img src={project_data.main_image} width="100%" alt="not found"/>
                    </Zoom>*/}
                    <ZoomImage src={project_data.main_image} width="100%" alt="not found"/>
                </div>
                
                {/*<div className="image">

                </div>*/}
            
                <BeautyButton onClick={()=>{set_redirect(true)}}>
                    Learn More
                </BeautyButton>
                
                
            </div>         
        </div>
    
    );
}

export default Project;




