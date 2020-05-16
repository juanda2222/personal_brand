


import screen1 from "./screen1.png";
import screen2 from "./screen2.png"
import screen3 from "./screen3.png"
import screen4 from "./screen4.png"
import screen5 from "./screen5.png"
import inelca from "./inelcas_meter.png"

const project_data = {
    tittle:"IOT House Manager",
    source:"https://github.com/juanda2222/house_manager",
    website:"google.com",
    abstract:"The house manager is a desktop application for single computer boards such as Raspberry’s. It controls automation hardware and connects to a Inelca’s electric meter for electric consumption. Also, it reports every event to a backend using Mqtts an Https requests",
    hashtags:["iot", "python", "mqtt", "https", "gcloud"],
    main_image:screen2,
    images:[
        {
            caption:"Home screen of the app", 
            image:screen1
        },
        {
            caption:"Measure screen for a given device", 
            image:screen2
        },
        {
            caption:"Control screen for a specified circuit", 
            image:screen3
        },
        {
            caption:"Configuration screen", 
            image:screen4
        },
        {
            caption:"Error screen for unsuported features", 
            image:screen5
        },
        {
            caption:"Inelcas meter", 
            image:inelca
        }
    ]
}

export default project_data

