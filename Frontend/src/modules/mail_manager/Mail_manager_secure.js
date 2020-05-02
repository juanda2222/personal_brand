
var nodemailer = require('nodemailer');

const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');


class Mail_manager_secure{

    constructor() {
    
      // If modifying these scopes, delete token.json.
      const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
      // The file token.json stores the user's access and refresh tokens, and is
      // created automatically when the authorization flow completes for the first
      // time.
      const TOKEN_PATH = 'token.json';

      // Load client secrets from a local file.
      const oauth2_client_json = JSON.parse(fs.readFileSync('../../credentials/oauth2_client.json'))
      //if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Gmail API.


      const {client_secret, client_id, redirect_uris} = oauth2_client_json.installed;
      this.oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

      const token_cred = JSON.parse(fs.readFileSync(TOKEN_PATH)); 
        
      //pass the credentials to the manager
      this.oAuth2Client.setCredentials(token_cred)
    }
      
    

    send_mail = (from, text) => {

      var auth = this.oAuth2Client

      // print the labels:
      const gmail = google.gmail({version: 'v1', auth});
      
      gmail.users.labels.list({
        userId: 'me',
      }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const labels = res.data.labels;

        //if the return list is not empty:
        if (labels.length) {
          console.log('Labels:');
          labels.forEach((label) => {
            console.log(`- ${label.name}`);
          });
        } else {
          console.log('No labels found.');
        }
      });
      
    }
  }

  
module.exports = Mail_manager_secure






