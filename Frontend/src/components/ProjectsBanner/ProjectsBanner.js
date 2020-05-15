
import React from "react"
import "./ProjectsBanner.css"


import Project from "./Project.js"
import page_info from "../../assets/pageInfo"


import device_monitoring_data from "../../assets/projects/device_monitoring/data"
import iot_book_data from "../../assets/projects/iot_book/data"

const ProjectsBanner = props => {
    return (    
    <div>
        <span id="projects_banner_pointer"></span>
        <div className="proyects_container">
            <div className="tittle">
                <h1>Projects</h1>
                <hr className="bar_style"/>
                <p>{page_info.english.projects_text}</p>
            </div>
            <Project className="project" 
                project_source = {device_monitoring_data.source}
                project_website = {device_monitoring_data.website}
                abstract = {device_monitoring_data.abstract}
                hastags_vec = {device_monitoring_data.hashtags}
                tittle = {device_monitoring_data.tittle}
                main_image = {device_monitoring_data.main_image}
                />
            <Project className="project" 
                project_source = {iot_book_data.source}
                project_website = {iot_book_data.website}
                abstract = {iot_book_data.abstract}
                hastags_vec = {iot_book_data.hashtags}
                tittle = {iot_book_data.tittle}
                main_image = {iot_book_data.main_image}
                />
        </div>
    </div>
    );
}

export default ProjectsBanner;




