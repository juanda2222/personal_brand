
import React, { useState } from "react"

import "./Project.css"
import BeautyButton from '../Buttons/BeautyButton.js';
import project_data from "../../assets/projects/device_monitoring/data"

import { Redirect } from 'react-router-dom';
import { FaFileCode, FaLaptopCode } from 'react-icons/fa';


//import ZoomImage from "../ZoomImage/ZoomImage.js"
import ZoomModal from "../ZoomModal/ZoomModal.js"



import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
//import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:"18px",
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.3),
        }
    }, custom_color: {
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

    if (redirect) {
        return <Redirect push to="/projects" />;
    }

    return (
        <div className="proyect_container">

            <div className="project_text">
                <h3>{tittle}</h3>
                <div className={classes.root}>
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
                <div className="centered">
                    {/*<Zoom>
                        <img src={project_data.main_image} width="100%" alt="not found"/>
                    </Zoom>*/}
                    <ZoomModal>
                        <img src={project_data.main_image} alt="not found" style={{width:"100%"}}/>
                    </ZoomModal>
                </div>

                {/*<div className="image">

                </div>*/}

                <BeautyButton onClick={() => { set_redirect(true) }}>
                    Learn More
                </BeautyButton>


            </div>
        </div>

    );
}

export default Project;




