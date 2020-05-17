
import React, { useState } from "react"

import "./Project.css"
import BeautyButton from '../Buttons/BeautyButton.js';
import project_data from "../../assets/projects/device_monitoring/data"
import ZoomModal from "../ZoomModal/ZoomModal.js"
//import ZoomImage from "../ZoomImage/ZoomImage.js"


import { Redirect } from 'react-router-dom';
import { FaFileCode, FaLaptopCode } from 'react-icons/fa';
//import TrackVisibility from 'react-on-screen';


import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
//import Box from '@material-ui/core/Box'



const useStyles = makeStyles((theme) => ({
    custom_color: {
        color: "#DDDDDD",
        borderColor: "rgb(29, 125, 160)",
        zIndex:1,
        //backgroundColor: "#146E8E",
    },
    avatar: {
        backgroundColor: "#6fb7d1",
      }
}));



const Project = props => {
    
    const classes = useStyles();

    //react hook to the redirect state
    const [redirect, set_redirect] = useState(false)


    if (redirect) {
        return <Redirect push to="/projects" />;
    }

    let source_url = props.project_source ? props.project_source : project_data.source;
    let website_url = props.project_website ? props.project_website : project_data.website;
    let abstract_text = props.abstract ? props.abstract : project_data.abstract
    let hastags_vec = props.hastags_vec ? props.hastags_vec : project_data.hashtags
    let tittle = props.tittle ? props.tittle : project_data.tittle
    const hastags = hastags_vec.map((value, index) => {

        return (
            <Chip
                key={index}
                variant="outlined"
                size="medium"
                className={classes.custom_color}
                avatar={<Avatar className={classes.avatar} >{value[0].toUpperCase()}</Avatar>}
                label={"#" + value}
                clickable
                /*color="primary"*/
            /*onDelete={handleDelete}*/
            /*deleteIcon={<DoneIcon />}*/
            />)
    }) //creaate the hashtags if the property is not empty

    const wrapper_class = props.isVisible ? "proyect_container flip-in-hor-bottom" : "proyect_container"

    return (
            <div className = {wrapper_class}>            
                <div className="project_text">
                    <h3>{tittle}</h3>
                    <div className="hashtags">
                        {hastags}
                    </div>
                    <p>{abstract_text}</p>
                    <div className="image_bar">

                        <a href={website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLaptopCode className="icon" />

                        </a>
                        <h3 style={{ textsize: "10px" }}>
                            website
                            </h3>

                        <a href={source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFileCode className="icon" />
                        </a>
                        <h3>
                            source
                            </h3>
                    </div>
                </div>
                <div className="project_image">
                        {/*<Zoom>
                            <img src={project_data.main_image} width="100%" alt="not found"/>
                        </Zoom>*/}
                        <ZoomModal>
                            <img src={props.main_image} alt="asset not found" />
                        </ZoomModal>

                    {/*<div className="image">

                    </div>*/}

                    <BeautyButton onClick={() => { set_redirect(true) }}>
                        Learn More
                    </BeautyButton>


                </div>
            </div>
        
    );
}


//const track_wrapper = props => {
//
//    return (
//        <TrackVisibility>
//            <Project {...props}/>
//        </TrackVisibility>
//    )
//}


export default Project;




