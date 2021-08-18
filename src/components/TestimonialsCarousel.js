import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
//Avatar Imports
 import avatar1 from "../images/job-opportunities-svgrepo-com.svg"
 import avatar2 from "../images/march-svgrepo-com.svg"
 import avatar3 from "../images/job-opportunities-svgrepo-com.svg"
 import avatar4 from "../images/march-svgrepo-com.svg"

function TestimonialsCarousel() {
    return (
        <Carousel
        showArrows= {true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2500}>
        <>
            <img src={avatar1} alt="Shikari Kranthi"/>
            <div className="myCarousel">
                <h5>Shikari Kranthi - Programme Convenor at Eduvos</h5>
                <i><p>"Bohlale is attentive and timely. He has shown a high level of dedication to all his work and therefore I can attest to his conduct and character."</p>
                <small>If you are in need of any further information concerning Bohlale's general conduct,  contact me at <a href="mailto:Kranthi.shikari@pearson.com">Kranthi.shikari@pearson.com</a> </small></i>
            </div>
        </>     

        <>
            <img src={avatar2} alt="Hendrick Mahlangu"/>
            <div className="myCarousel">
                <h5>Bishop Hendrick Mahlangu - Director of GCPS</h5>
                <i><p>"Bohlale shows a high level of competence and dedication that borders on obsession in regards to his work. I can attest for his professionalism and design ability."</p>
                <small>If you are in need of any further infromation concerning his Web Development abilities, contact me at <a href="mailto:hendrickmahlangu777@gmail.com">hendrickmahlangu777@gmail.com</a> </small></i>
            </div>
        </> 

        <>
            <img src={avatar3} alt="James Doe"/>
            <div className="myCarousel">
                <h5>James Doe</h5>
                <p>Bohlale Nkoana is an amazing software developer, athlete, and artist. He's a total gangster</p>
            </div>
        </> 

        <>
            <img src={avatar4} alt="Jack Doe"/>
            <div className="myCarousel">
                <h5>Jack Doe</h5>
                <p>Bohlale Nkoana is an amazing software developer, athlete, and artist. He's a total gangster</p>
            </div>
        </> 
        </Carousel>
    )
}

export default TestimonialsCarousel
