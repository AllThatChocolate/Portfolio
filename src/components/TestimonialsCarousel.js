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
                <h4>Shikari Kranthi - Programme Convenor</h4>
                <i><p>"Bohlale is attentive and timely. He has shown a high level of dedication to all his work and therefore I can attest to his conduct and character."</p>
                <small>If you are in need of any further information concerning Bohlale's general conduct, please feel free to contact me at Kranthi.shikari@pearson.com</small></i>
            </div>
        </>     

        <>
            <img src={avatar2} alt="Hendrick Mahlangu"/>
            <div className="myCarousel">
                <h4>Bishop Hendrick Mahlangu - Director of GCPS</h4>
                <i><p>"Bohlale shows a high level of competence and dedication that borders on obsession in regards to web development and i can attest for his professionalism and design ability."</p>
                <small>If you are in need of any further infromation concerning his Web Development abilities, feel free to contact me at  082 844 7777</small></i>
            </div>
        </> 

        <>
            <img src={avatar3} alt="James Doe"/>
            <div className="myCarousel">
                <h3>James Doe</h3>
                <p>Bohlale Nkoana is an amazing software developer, athlete, and artist. He's a total gangster</p>
            </div>
        </> 

        <>
            <img src={avatar4} alt="Jack Doe"/>
            <div className="myCarousel">
                <h3>Jack Doe</h3>
                <p>Bohlale Nkoana is an amazing software developer, athlete, and artist. He's a total gangster</p>
            </div>
        </> 
        </Carousel>
    )
}

export default TestimonialsCarousel
