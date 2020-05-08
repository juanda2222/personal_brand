import React, { 
	//Component
 } from 'react';
import "./ContactBanner.css"
import personal_logo from "../../assets/personal_logo.png"


import { store } from 'react-notifications-component';
import ReCAPTCHA from "react-google-recaptcha";
import { FaBehanceSquare, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';


//import BeautyButton from "../Buttons/BeautyButton"
//import ReactLoading from 'react-loading';

import BeautyLoadingButton from "../Buttons/BeautyLoadingButton"
import pageInfo from "../../assets/pageInfo"



const recaptchaRef = React.createRef();

class ContactBanner extends React.Component{
  
  state = {
	is_sending:false,
  	name: '',
  	email: '',
	message: '',
	name__input_class: "form_input",
	email__input_class: "form_input",
	message__input_class: "form_input",
	captcha:""
  }

  onNameChange = (event) => {
	event.preventDefault(); //prevents the page from reloading itself
	//console.log((this!=="undefined"))
	if (this!=="undefined") {
		this.setState({name: event.target.value})
	}
  }

  onEmailChange = (event) => {
	event.preventDefault(); //prevents the page from reloading itself
	if (this!=="undefined") {
		this.setState({email: event.target.value})
	}
  }

  onMessageChange = (event) => {
	event.preventDefault(); //prevents the page from reloading itself
	if (this!=="undefined") {
		this.setState({message: event.target.value})
	}
  }


  handleSubmit = async (e) =>{
	  
	//process captcha only if the fields are filled:
	if ( !this.state.is_sending && (this.state.name !== "") && (this.state.email !== "") && (this.state.message !== "")){
		
		this.setState({is_sending:true}) //set up the loading animation
		recaptchaRef.current.execute() // verify with captcha

	// show a message if any field is empty
	} else {

		//change the color of the empty inputs:
		if (this.state.name === "" ) this.setState({name__input_class:"form_input_error"})
		if (this.state.email === "" ) this.setState({email__input_class:"form_input_error"})
		if (this.state.message === "" ) this.setState({message__input_class:"form_input_error"})
		
		store.addNotification({
			title: "Error",
			message: "Please fill all fields!",
			type: "danger",
			insert: "top",
			container: "top-center",
			animationIn: ["fade-in"],
			animationOut: ["fade-out"],
			dismiss: {
			  duration: 5000,
			  onScreen: true
			}
		  });
	}
  }

  // when the captcha is processed we can request the email post
  captcha_onChange = async (value) => {

	//console.log("Captcha value:", value);
	//const recaptchaValue = await recaptchaRef.current.getValue(); //this is an instant value and can return empty
	if (value!==null){

		const port = process.env.REACT_APP_NODE_PORT ? process.env.REACT_APP_NODE_PORT : 1000
		const domain = process.env.REACT_APP_PRODUCTION ? "david.alfagenos.com": "http://localhost:"+port
		//const domain = "localhost:"
		//console.log("Port: "+port)
		//console.log("enviroment: ", process.env)
		//await new Promise(resolve => setTimeout(resolve, 5000)); //this is a delay used for testing
		//let response = {status:200}

		var data = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message,
			captcha: value
		}
		console.log("submmiting data... Data: ", data)
		
		let response = await axios({
			method: 'post',
			url: domain + "/contact/send_email",
			data: data
		});
		

		//Send info message if sent
		if (response.status === 200){
			store.addNotification({
				title: "Admin",
				message: "Message sent! Thanks for writing us",
				type: "info",
				insert: "top",
				container: "top-center",
				animationIn: ["fade-in"],
				animationOut: ["fade-out"],
				dismiss: {
					duration: 5000,
					onScreen: true
				}
			});
			// clean everything
			this.setState({
				name: "", email: "", message: "",
				name__input_class:"form_input", 
				email__input_class:"form_input", 
				message__input_class:"form_input",
				is_sending:false
			})


		// notify the error if the server returns error
		}else {
			store.addNotification({
				title: "Server error!",
				message: "Please try again later. Thanks",
				type: "danger",
				insert: "top",
				container: "top-center",
				animationIn: ["fade-in"],
				animationOut: ["fade-out"],
				dismiss: {
					duration: 5000,
					onScreen: true
				}
			});
			// clean the loading
			this.setState({is_loading:false})
		}
	}
  }
   
  
  render() {
	return(
	<div className="contact_background">
		<div className="darkener_container">
			<div className="contact_grid">
				
				<div className="contact_text_container">	
					<img style={{width:"20%"}} src={personal_logo} alt="loading..."></img>								
					<h1>
						Contact me
					</h1>
					<hr className="contact_me_bar"/>
					<p>
						{pageInfo.english.contact_me_text1}
					</p>
					<div className="social_icons">
                        <a href={pageInfo.english.github_link} 
                            target="_blank">
                            <FaGithub className="icon"/>
                        </a>
                        <a href={pageInfo.english.behance_link} 
                            target="_blank">
                            <FaBehanceSquare className="icon"/>
                        </a>
                        <a href={pageInfo.english.linkedin_link}  
                            target="_blank">
                            <FaLinkedinIn className="icon" />
                            
                        </a>
                    </div>
				</div>
				<div className="centered">
					<div className="contact_form_container">
						
						<p>
							{pageInfo.english.contact_me_text2}
						</p>
						<form id="contact_form" method="POST">
							<div className="form_group">
								<label htmlFor="name">Name</label>
								<input type="text" 
									className={this.state.name__input_class} 
									id="name" value={this.state.name} 
									onChange={this.onNameChange} />
							</div>
							<div className="form_group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input type="email" 
									className={this.state.email__input_class} 
									id="email" 
									aria-describedby="emailHelp" 
									value={this.state.email} 
									onChange={this.onEmailChange} />
							</div>
							<div className="form_group">
								<label htmlFor="message">Message</label>
								<textarea className={this.state.message__input_class} 
									rows="5" 
									maxLength = "150"
									id="message" 
									value={this.state.message} 
									onChange={this.onMessageChange} />
							</div>
							<ReCAPTCHA
								sitekey="6LdHkPIUAAAAAJQnHy_P1BMIYXgLDk52gEWWUmEr"
								onChange={this.captcha_onChange}
								theme="light"
								size="invisible"
								ref={recaptchaRef}
							/>
							<BeautyLoadingButton 
								style={{width:"70%", fontSize:"16px"}}
								is_loading={this.state.is_sending}
								onClick={this.handleSubmit}>
									Submit
							</BeautyLoadingButton>
							
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
  }


}

export default ContactBanner;



