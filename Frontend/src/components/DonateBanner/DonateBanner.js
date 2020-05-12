import React, {
	//Component
} from 'react';
import "./DonateBanner.css"
import group_pic2 from "../../assets/group_pic4.jpg"


import { store } from 'react-notifications-component';
import ReCAPTCHA from "react-google-recaptcha";
import { FaBehanceSquare, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';


//import BeautyButton from "../Buttons/BeautyButton"
//import ReactLoading from 'react-loading';

import DonateCard from "./DonateCard"
import pageInfo from "../../assets/pageInfo"




class DonateBanner extends React.Component {
	state = {
		is_sending: false,
		dark_classname: "dark_background",
		light_classname: "light_background"
	}

	donateHover = () => {
		this.setState({
			dark_classname: "dark_background horizontal",
			light_classname: "light_background horizontal"
		})
	}
	donateNormal = () => {
		this.setState({
			dark_classname: "dark_background",
			light_classname: "light_background"
		})
	}
	donateHandler = () => {

	}

	render() {
		return (
			<div className="donate_form_container">
				<img src={group_pic2} style={{
					position: "absolute",
					zIndex:-1,
					top:0,  
					width: "100vw",
					//objectFit:"cover",
					}}/>
				<div className={this.state.dark_classname}/>
				<div className={this.state.light_classname}/>

				<DonateCard
					onDonateHover={this.donateHover}
					onDonateNormal={this.donateNormal}
					DonateClick={this.donateHandler}
					is_sending = {this.state.is_sending}
				/>
			</div>
		);
	}


}

export default DonateBanner;



