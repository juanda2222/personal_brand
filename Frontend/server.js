
//process the argument variables
/*
let args = JSON;
process.argv.slice(2).forEach(argument_pair => {
  let pair = argument_pair.split("=")
  if (pair[0]=="PORT"){
    args["PORT"] = pair[1]
    process.env["PORT"] = pair[1]

  } else if (pair[0]=="PRODUCTION"){
    args["PRODUCTION"] = pair[1]
    process.env["PRODUCTION"] = pair[1]
  } 
});
console.log(">> Args received: ", args)
console.log(">> Test env var", process.env["var"])
*/


//proyect_id = "encoded-road-275921"

//server.js
const express = require('express');
const cors = require('cors');
const favicon = require('express-favicon');
const path = require('path');
const fs = require("fs")
const axios = require('axios');

//custom modules:
const Mail_Manager = require("./src/modules/mail_manager/Mail_manager_secure")
const SecretsManager = require("./src/modules/CloudStorage/SecretsManager")


// constants:
let SECRETS;
var PORT =  (process.env["NODE_PORT"]) ? process.env["NODE_PORT"] : 1000
var allowedOrigins = ['http://localhost:3000', //react start port
                      'http://localhost:8080', //production port
                        'https://david.alfagenos.com']; //my domain name



const config_app = async () =>{
  
  //download the secret files:
  let secretsManager = new SecretsManager()
  var response = await secretsManager.save_all_secrets()
  console.log("Secret files downloaded: ", response)
  
  //await new Promise((resolve, reject) => setTimeout(() =>{console.log("timeout!");resolve()}, 50000))

  //load constants:
  SECRETS =  JSON.parse(fs.readFileSync(path.normalize(__dirname+"/../credentials/secrets.json")))
}

let app_is_configured = config_app()

//create the express app
const app = express();

// Configure the handlers used by both development and production 
app.use(cors({
  credentials:true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    //if(!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('The CORS policy for this site does not ' +
      'allow access from the specified Origin.'))
    }
  }
}));
app.use(express.json());


app.post('/contact/send_email', async (req, res) => {
  
  await app_is_configured

  //console.log("Ip addres of the reques: ", req.connection.remoteAddress)
  console.log("Req 'send email' data: ", req.body )
  console.log("secret captcha: ", SECRETS.CAPTCHA_SECRET)

  //check with the captcha endpoint if the request is legitimate:
  var data = {
    secret: SECRETS.CAPTCHA_SECRET,
    response: req.body.captcha
    //remoteip: req.connection.remoteAddress, //this one is optional
  }
  console.log("Submmiting captcha data... ")

  try {
    // verify with the captcha server the lawfull request (this endpoint uses url encoded format)
    let response = await axios({
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: 'post',
      url: "https://www.google.com/recaptcha/api/siteverify?"+
            `secret=${SECRETS.CAPTCHA_SECRET}&`+
            `response=${req.body.captcha}`
    });
    console.log("Captcha response ok: ", response.data)
    if (!response.data.success) return res.status(500).send('Captcha failed');


  } catch (error) {
    console.log("Error conecting to the captcha server: ", error)  
    return res.status(500).send('Error connecting to the captcha server');
  }

  //Create the text objets
  const mail_args = {
    subject: "Portfolio message - " + req.body.name,
    content: `${req.body.name} <b>(${req.body.email})</b> says: <br />
    ${req.body.message}`
  }
  console.log("Mail args: ", mail_args )

  //Use the google apis to send the message
  try {
    const manager = new Mail_Manager()
    console.log("-> sending email");
    const response = await manager.send_mail(mail_args)
    //console.log("-> Email sent!")
    console.log("-> Email sent! Google message: ", response)
    return res.status(200).send('Email sent!');     

  } catch (error) {
    console.log("Error sending the email: ", error)
    return res.status(500).send('Error sending the email!');
  }

  
});

//this is a test endpoint
app.get('/ping', function (req, res) {
  console.log("-> Ping");
  console.log("-> Host name: ", req.headers.host)

  return res.send('Good job! you found this url, have his cookie: 🍪');
});

// serve the static files if in production:
if (process.env["PRODUCTION"] === "true"){

  console.log("> Configuring production server")
  
  // the __dirname is the current directory from where the script is running
  //dirname is the path of the current file
  app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
  app.use(express.static(path.join(__dirname, 'build')));
  //app.use('/Frontend/', express.static(path.join(__dirname, 'build')));
  
  app.get('*', function (req, res) {
    console.log("-> Page")

    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //return res.send('root');
  });
  

// create all the handlers needed on development: 
}else {

  app.get('/test', function (req, res) {
    console.log("-> test");
    return res.send('test bby');
  });
}


console.log(">>> Backend Online")
console.log("   Server running at port: "+PORT)
app.listen(PORT, () => console.log(`listening on ${PORT}`));

