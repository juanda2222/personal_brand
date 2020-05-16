


import mockup from "./mockup.jpg"
import portada from "./portada.jpg"

const project_data = {
    tittle:"IOT and Google Cloud book",
    source:"https://github.com/juanda2222/iot_and_smart_homes_book",
    website:"https://storage.googleapis.com/personal_brand_public_files/Tesis%20-%20Iot%20-%20Espa%C3%B1ol.pdf",
    abstract:"A latex template for a thesis using the official Universidad del Valle format. The document will explain the process carried out to implement a client server model that communicates diﬀerent devices under the internet of things paradigm. The system consists mainly of 3 products: the backend product, a mobile and a desktop application.",
    hashtags:["latex", "text", "iot", "gcloud"],
    main_image:mockup,
    images:[
        {
            caption:"Printed book", 
            image:mockup
        },
        {
            caption:"Official cover page of the book", 
            image:portada
        }
    ]
}

export default project_data
