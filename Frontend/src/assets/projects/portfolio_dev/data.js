


import screen1 from "./screen1.png";
import screen2 from "./screen2.png"
import screen3 from "./screen3.png"

const project_data = {
    tittle:"AI and ultrasonic waves for object recognition",
    source:"https://github.com/juanda2222/object_detection_instrumentation",
    website:"https://storage.cloud.google.com/personal_brand_public_files/instrumentacion%20-%20dsp.pdf",
    abstract:"This application uses artificial intelligence and probabilistic analysis to recognize one of the three objects used to train the neural network. The information of the object is acquired through a microcontroller and an array of analogs ultrasonic sensors",
    hashtags:["python", "ai", "pyside", "arduino", "serial"],
    prev_image_index:1,
    images:[
        {
            caption:"The training screen and the visualization of every input channel", 
            image:screen1
        },
        {
            caption:"The training screen before a training sequence", 
            image:screen2
        },
        {
            caption:"The detection screen and the mixture of every input channel for the current object", 
            image:screen3
        }
    ]
}

export default project_data

