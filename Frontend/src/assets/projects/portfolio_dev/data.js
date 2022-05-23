

import screen1 from "./screen1.png";
import screen2 from "./screen2.png"
import screen3 from "./screen3.png"
import screen4 from "./screen4.png"

const project_data = {
    tittle:"Portfolio template built in React for beginners",
    source:"https://github.com/juanda2222/personal_brand",
    website:"https://david.alfagenos.com",
    abstract:"This is a Portfolio template built exclusively in React CSS and, continuos integration is available with CircleCI and the backend i built in nodejs with Express. The application is deployed on Gcloud run",
    hashtags:["react", "javascript", "node", "gcloud", "docker", "circleci"],
    prev_image_index:0,
    images:[
        {
            caption:"About me section of the page", 
            image:screen1
        },
        {
            caption:"Projects section of the web application", 
            image:screen2
        },
        {
            caption:"Donate section of the page using Paypal", 
            image:screen3
        },
        {
            caption:"The contact page connected to the personal Gmail", 
            image:screen4
        }
    ]
}

export default project_data

