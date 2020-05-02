
var nodemailer = require('nodemailer');


class Mail_manager_insecure{

    constructor() {

      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mail@gmail.com',
          pass: 'password'
        }
      });
    }
    

    send_mail = (from, text) => {
      
      const mailOptions = {
        from: from,
        to: 'name@gmail.com',
        subject: 'Sending Email using Node.js',
        text:text
      };

      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return "Error! "+error
        } else {
          return 'Email sent! ' + info.response
        }
      });
    }
  }

  
module.exports = Mail_manager_insecure






