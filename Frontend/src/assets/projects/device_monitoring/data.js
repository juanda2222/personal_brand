


import image1 from "./desktop1.png"
import image2 from "./desktop2.png"
import image3 from "./desktop3.png"
import image4 from "./page1.png"
import image5 from "./page2.png"
import image6 from "./page3.png"

const project_data = {
    tittle:"Device Monitoring",
    source:"https://github.com/juanda2222/Devices-Monitoring.git",
    website:"https://datastudio.google.com/u/0/reporting/bd8feb78-fbd5-448a-9fad-d2996e5c28a8/page/2tELB",
    abstract:"The \"Devices monitoring\" app is an app that uses a web dashboard to monitor measurements of any device connected through the desktop application (Gateway). The dashboard is capable of delivering different type of statistical information such as average measurements and historical data. Any usage of the application is limited by Google’s authentication system and as the database several. For the current version the gateway can be integrated with any amount of Inelca’s biphasic counters.",
    hashtags:["python", "gcloud", "iot", "firebase", "bigquery"],
    main_image:image4,
    images:[
        {
            caption:"Screenshot of the desktop aplication. The current tab displays a graph of the adquired data of the selected Inecla device", 
            image:image1
        },
        {
            caption:"Screenshot of the desktop aplication. The config tab allows the user to change the data report rate", 
            image:image2
        },
        {
            caption:"Screenshot of the desktop aplication. Each device has his own config tab to set parameters such as a custom name", 
            image:image3
        },
        {
            caption:"Screenshot of the dashboard website. The system use datastore Google's datastore to report the data", 
            image:image4
        },
        {
            caption:"Screenshot of the dashboard website. The data can be filltered and the result, displayed or downloaded as a .csv file", 
            image:image5
        },
        {
            caption:"Screenshot of the desktop aplication. Data can be filtered by its timestamp using the date range selector", 
            image:image6
        }
    ]
}

export default project_data
