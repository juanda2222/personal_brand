

const Mail_manager_secure = require("../src/modules/mail_manager/Mail_manager_secure")


const my_manager = new Mail_manager_secure()

var response = my_manager.send_mail('juandara2222@gmail.com', "test text bby it worked!")

console.log("Email response: ", response)