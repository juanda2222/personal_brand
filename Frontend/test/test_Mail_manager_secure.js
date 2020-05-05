
const Mail_manager_secure = require("../src/modules/mail_manager/Mail_manager_secure")

const secure_mail_test = async () => {
    
    const my_secure_manager = new Mail_manager_secure()
    var response = await my_secure_manager.send_mail({
        subject:"test subject",
        content: "test text bby it worked!"
    })
    console.log("Email sent response: ", response)
}



//if the module is main execute the example
if (module === require.main) {
    secure_mail_test()
  }
  
module.exports = secure_mail_test