
import React from "react"
import "./AboutBanner.css"

import profile_image from "../../assets/profile.jpg"
import BeautyButton from '../Buttons/BeautyButton.js';
//import ZoomImage from "../ZoomImage/ZoomImage.js"
import ZoomModal from "../ZoomModal/ZoomModal.js"
import page_info from "../../assets/pageInfo"

//import { Link } from 'react-router-dom';
//import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaDownload } from 'react-icons/fa';

const AboutBanner = props => {

    let about_text = props.about_me_text ? props.about_me_text : page_info.english.about_me
    let facebook_link = props.facebook_link ? props.facebook_link : page_info.english.facebook_link
    let instagram_link = props.instagram_link ? props.instagram_link : page_info.english.instagram_link
    let twitter_link = props.twitter_link ? props.twitter_link : page_info.english.twitter_link

    return (
        <div>
            <span id="about_banner_pointer"></span>
            <div className="about_container">
                <div className="about_image">
                    <ZoomModal>
                        <img src={profile_image} alt="not found" style={{height:"auto",width:"80%"}}/>
                    </ZoomModal>
                    
                </div>                
                <div className="about_tittle">    
                    <h1 >About Me</h1>
                    <hr className="about_bar"/>
                    <p>
                        {about_text}
                    </p>
                    
                    <div className="social_icons">
                        <a href={facebook_link} 
                            target="_blank">
                            <FaFacebookSquare className="icon"/>
                        </a>
                        <a href={instagram_link} 
                            target="_blank">
                            <FaInstagram className="icon"/>
                        </a>
                        <a href={twitter_link}  
                            target="_blank">
                            <FaTwitter className="icon" />
                            
                        </a>
                    </div>
                </div>
                <div className="about_download">

                    <BeautyButton 
                        href={page_info.english.resumee_file_url}  
                        target="_blank" >
                        <FaDownload className="inline_icon"/>
                        {page_info.english.Download_resumee_text}
                    </BeautyButton>
                </div>
            </div>
        </div>
    )
}   

export default AboutBanner;