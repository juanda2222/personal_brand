import React, { 
	//Component
 } from 'react';
import "./ContactBanner.css"
import personal_logo from "../../assets/personal_logo.png"

import BeautyButton from "../Buttons/BeautyButton"
import pageInfo from "../../assets/pageInfo"


import { FaBehanceSquare, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';

class ContactBanner extends React.Component{
  
  state = {
  	name: '',
  	email: '',
  	message: '',
  }

  onNameChange = (event) => {
	console.log((this!=="undefined"))
	if (this!=="undefined") {
		this.setState({name: event.target.value})
	}
  }

  onEmailChange = (event) => {
	if (this!=="undefined") {
		this.setState({email: event.target.value})
	}
  }

  onMessageChange = (event) => {
	if (this!=="undefined") {
		this.setState({message: event.target.value})
	}
  }


  handleSubmit = async (e) =>{
	e.preventDefault();

	const port = process.env["NODE_PORT"]
	const domain = "localhost:"
	console.log("Node env port: "+port)

	console.log("submmiting...")
	
	let response = await axios({
		method: 'post',
		url: "http://localhost:"+port+"/contact/send_email",
		data: {
		  firstName: 'Fred',
		  lastName: 'Flintstone'
		}
	  });
	console.log("Email response: ", response)
    if (response.status === 200){
      alert("Message Sent."); 
      this.setState({name: "", email: "", message: ""})
    }else if(response.data.status === 'fail'){
      alert("Message failed to send.")
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
									className="form_input" 
									id="name" value={this.state.name} 
									onChange={this.onNameChange} />
							</div>
							<div className="form_group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input type="email" 
									className="form_input" 
									id="email" 
									aria-describedby="emailHelp" 
									value={this.state.email} 
									onChange={this.onEmailChange} />
							</div>
							<div className="form_group">
								<label htmlFor="message">Message</label>
								<textarea className="form_input" 
									rows="5" 
									id="message" 
									value={this.state.message} 
									onChange={this.onMessageChange} />
							</div>
							
							<BeautyButton 
								style={{width:"70%", fontSize:"16px"}}
								onClick={this.handleSubmit}>Submit</BeautyButton>
							
							
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



