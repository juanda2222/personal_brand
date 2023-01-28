var nodemailer = require('nodemailer');

const fs = require('fs');
const path = require("path")
const axios = require("axios")


class AllPayment{

    constructor() {
        load()
    }
    load = async () => {

        //create the accesible data based on promises
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

        console.log("Response: ", response)
    }
}
  
module.exports = AllPayment


