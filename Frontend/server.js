
//process the argument variables
let args = JSON;
process.argv.slice(2).forEach(argument_pair => {
  let pair = argument_pair.split("=")
  if (pair[0]=="PORT"){
    args["PORT"] = pair[1]

  } else if (pair[0]=="PRODUCTION"){
    args["PRODUCTION"] = pair[1]
  } 
});
console.log(">> Args received: ", args)
console.log(">> Env var", process.env["var"])

//server.js
const express = require('express');
const cors = require('cors');
const favicon = require('express-favicon');
const path = require('path');


//constants:
var port =  (args['PRODUCTION'] === "true") ? args["PORT"] : 1000
var allowedOrigins = ['http://localhost:3000', //react start port
                      'http://yourapp.com']; //my domain name

//create the express app
const app = express();

// Configure the handlers used by both development and production 
app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    //if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.post('/contact/send_email', function (req, res) {
  console.log("-> sending email");
  return res.send('email sent!');
});


// serve the static files if in production:
if (args['PRODUCTION'] === "true"){

  console.log("> Configuring production server")
  
  // the __dirname is the current directory from where the script is running
  //dirname is the path of the current file
  app.use(favicon(path.join(__dirname, "build", "favicon.ico")));

  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', function (req, res) {
    console.log("-> page")
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //return res.send('root');
  });
  

// create all the handlers needed on development: 
}else {

  app.get('/ping', function (req, res) {
    console.log("-> ping");
    return res.send('ping bby');
  });
}


console.log(">>> Backend Online")
console.log("   Server running at port: "+port)
app.listen(port);


/*
// add a proxy service to route the serverless google backend
app.get('/jokes/random', (req, res) => {
  request(
    { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));
*/