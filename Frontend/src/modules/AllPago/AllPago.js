var nodemailer = require('nodemailer');

const fs = require('fs');
const path = require("path")
const axios = require("axios")


class SecretsManager{

    constructor() {
        
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
        
    }
      
    /**
     * This will save all the credentials files on a folder named credentials in root
     * @returns {Promise}       Returns texts after the promise 
     */
    
    save_all_secrets = async () =>{
        
        const crdentials_dir_path = path.normalize(__dirname+"/../../../../credentials")
        console.log(">> Credentials path: ", crdentials_dir_path)
        
        if (!fs.existsSync(crdentials_dir_path)){
            fs.mkdirSync(crdentials_dir_path);
            console.log("> dir created!")
            
            // create the oauth2
            var file_path = crdentials_dir_path+`/oauth2_client.json`
            var bucket_path = `credentials/oauth2_client.json`
            var oauth2_client = await this.download_file(bucket_path)
            fs.writeFileSync(file_path, oauth2_client);
            
            // create the oauth2
            var file_path = crdentials_dir_path+`/juan_email_creds.json`
            var bucket_path = `credentials/juan_email_creds.json`
            var juan_email_creds = await this.download_file(bucket_path)
            fs.writeFileSync(file_path, juan_email_creds);

            // create the oauth2
            var file_path = crdentials_dir_path+`/secrets.json`
            var bucket_path = `credentials/secrets.json`
            var secrets = await this.download_file(bucket_path)
            fs.writeFileSync(file_path, secrets);

            console.log("> files created!")
            this.resolve_download(true)
            return "Directory downloaded"
        }else{
            this.resolve_download(true)
            return "Directory already created"
        }
        
    }
    
    /**
     * This will return the json file without parsing
     */
    download_file = async (bucket_file_path) => {

        //const bucketFile = `credentials/oauth2_client.json`
        const file = this.secureBucket.file(bucket_file_path)
    
        return new Promise((fulfill, reject) =>  {
            file.download( (err, fileContents) => {
                if (err) {
                    console.log(`error downloading file: ${err}`)
                    reject(`error downloading file: ${err}`)
                } else {
                    //console.log('Contents:', fileContents.toString());
                    fulfill(fileContents)
                    //throw new Error('Ran out of coffee')
                }
            })
        })
    };
  }

  
module.exports = SecretsManager


