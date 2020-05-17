


const fs = require('fs');
const {google} = require('googleapis');


class Mail_manager_secure{

    constructor() {
    
      // If modifying these scopes, delete token.json.
      const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
      // The file token.json stores the user's access and refresh tokens, and is
      // created automatically when the authorization flow completes for the first
      
      // Load client secrets from a local file.
      const TOKEN_PATH = __dirname + '/../../../../credentials/juan_email_creds.json';
      const OAUTH2_CLIENT_JSON_PATH = __dirname + '/../../../../credentials/oauth2_client.json'
      //if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Gmail API.


      // Load client secrets from a local file.
      var creds_content = JSON.parse(fs.readFileSync(OAUTH2_CLIENT_JSON_PATH))
      const {client_secret, client_id, redirect_uris} = creds_content.installed;
      this.oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
      this.token = JSON.parse(fs.readFileSync(TOKEN_PATH))
      // pass the credentials to the oauth object manager:
      this.oAuth2Client.setCredentials(this.token.tokens);
      //console.log("Saved token: ", this.token)
    }
      
    

    send_mail = async (args) => {


      // You can use UTF-8 encoding for the subject using the method below.
      // You can also just use a plain string if you don't need anything fancy.
      const utf8Subject = `=?utf-8?B?${Buffer.from(args.subject).toString('base64')}?=`;
      const messageParts = [
        'To: <juandara2222@gmail.com>',
        'Content-Type: text/html; charset=utf-8',
        'MIME-Version: 1.0',
        `Subject: ${utf8Subject}`,
        '',
        `${args.content}`,
      ];
      const message = messageParts.join('\n');

      // The body needs to be base64url encoded.
      const encodedMessage = Buffer.from(message)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      const gmail = google.gmail({version: 'v1', auth: this.oAuth2Client});

      const res = await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: encodedMessage,
        },
      });
      return res.data;
      
    }
  }

  
module.exports = Mail_manager_secure






