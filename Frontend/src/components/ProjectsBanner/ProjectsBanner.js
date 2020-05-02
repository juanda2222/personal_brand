
import React from "react"
import "./ProjectsBanner.css"


import Project from "./Project.js"
import page_info from "../../assets/pageInfo"

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
            <Project className="project"/>
            <Project className="project"/>
            <Project className="project"/>
            <Project className="project"/>
            <Project className="project"/>
            <Project className="project"/>
        </div>
    </div>
    );
}

export default ProjectsBanner;




