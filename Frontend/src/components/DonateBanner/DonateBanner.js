import React, { 
	//Component
 } from 'react';
import "./DonateBanner.css"
import personal_logo from "../../assets/personal_logo.png"


import { store } from 'react-notifications-component';
import ReCAPTCHA from "react-google-recaptcha";
import { FaBehanceSquare, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';


//import BeautyButton from "../Buttons/BeautyButton"
//import ReactLoading from 'react-loading';

import BeautyLoadingButton from "../Buttons/BeautyLoadingButton"
import pageInfo from "../../assets/pageInfo"




class DonateBanner extends React.Component{
	state = {
		email:"",
		message:"",
		is_sending:false
	}
  render() {
	return(
	<div className="donate_form_container">
		<div className="dark_background">
		</div>
		<div className="light_background">
		</div>
		<div className="donate_card">
			<p>
				{"Donate"}
			</p>
			<form id="contact_form" method="POST">
				<div className="form_group">
					<label htmlFor="exampleInputEmail1">Amount</label>
					<input type="email" 
						className=""
						id="email" 
						aria-describedby="emailHelp" 
						value={this.state.email} 
						onChange={this.onEmailChange} />
				</div>
				<div className="form_group">
					<label htmlFor="message">Message</label>
					<textarea className=""
						rows="5" 
						maxLength = "150"
						id="message" 
						value={this.state.message} 
						onChange={this.onMessageChange} />
				</div>
				<BeautyLoadingButton 
					style={{width:"70%", fontSize:"16px"}}
					is_loading={this.state.is_sending}
					onClick={this.handleSubmit}>
						Submit
				</BeautyLoadingButton>
				
			</form>
		</div>
	</div>
	);
  }


}

export default DonateBanner;



