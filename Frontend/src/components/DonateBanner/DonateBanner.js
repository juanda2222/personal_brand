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

import BeautyLoadingButton from "../Buttons/BeautyLoadingButton"
import pageInfo from "../../assets/pageInfo"




class DonateBanner extends React.Component {
	state = {
		email: "",
		message: "",
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

	render() {
		return (
			<div className="donate_form_container">
				<img src={group_pic2} style={{
					position: "absolute",
					zIndex:-1,
					top:0,  
					}}/>
				<div className={this.state.dark_classname}/>
				<div className={this.state.light_classname}/>
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
								onChange={()=>{}} />
						</div>
						<div className="form_group">
							<label htmlFor="message">Message</label>
							<textarea className=""
								rows="5"
								maxLength="150"
								id="message"
								value={this.state.message}
								onChange={()=>{}} />
						</div>
						<BeautyLoadingButton
							style={{ width: "70%", fontSize: "16px" }}
							is_loading={this.state.is_sending}
							onClick={this.handleSubmit}
							onMouseEnter={this.donateHover}
							onMouseLeave={this.donateNormal}
						>


							Submit
						</BeautyLoadingButton>
					</form>
				</div>
			</div>
		);
	}


}

export default DonateBanner;



