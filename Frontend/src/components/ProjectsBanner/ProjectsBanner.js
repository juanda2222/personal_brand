
import React, {useState, useEffect} from "react"
import "./ProjectsBanner.css"


import Project from "./Project.js"
import page_info from "../../assets/pageInfo"


import device_monitoring_data from "../../assets/projects/device_monitoring/data"
import iot_book_data from "../../assets/projects/iot_book/data"
import house_manager_data from "../../assets/projects/house_manager/data"
import iot_gcloud_data from "../../assets/projects/iot_gcloud/data"
import ai_object_detection_data from "../../assets/projects/ai_object_detection/data"
import personal_portfolio from "../../assets/projects/portfolio_dev/data"
import url_shortener from "../../assets/projects/url_shortener/data"


const get_home_projects = () => {

    //Get the most popular projects using the server

    return [
        url_shortener,
        personal_portfolio,
        house_manager_data,
        device_monitoring_data,
        iot_gcloud_data,
        iot_book_data,
        ai_object_detection_data,
    ]
}

const ProjectsBanner = props => {

    const [ projects_components, set_projects_components ] = useState(null)


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        
        // Get the most popular projects:
        var projects = get_home_projects()
        var projects_components = projects.map((project_obj, index) => { 
            return <Project className="project" 
                key = {index}
                project_source = {project_obj.source}
                project_website = {project_obj.website}
                abstract = {project_obj.abstract}
                hastags_vec = {project_obj.hashtags}
                tittle = {project_obj.tittle}
                images_vec = {project_obj.images}
                image_index = {project_obj.prev_image_index}
                />
         })
        set_projects_components(projects_components)
        return () => {/*cleanup*/}
    }, []);

    return (    
    <div>
        <span id="projects_banner_pointer"></span>
        <div className="proyects_container">
            <div className="tittle">
                <h1>Projects</h1>
                <hr className="bar_style"/>
                <p>{page_info.english.projects_text}</p>
            </div>
            {projects_components}
        </div>
    </div>
    );
}


export default ProjectsBanner;




