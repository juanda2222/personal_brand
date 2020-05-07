
const SecretsManager = require("../src/modules/CloudStorage/SecretsManager")

const secrets_manager_test = async () => {
    
    const my_secrets_manager = new SecretsManager()
    var response = await my_secrets_manager.save_all_secrets()
    console.log("Secrets Saved! ", response)
}



//if the module is main execute the example
if (module === require.main) {
    secrets_manager_test()
  }
  
module.exports = secrets_manager_test