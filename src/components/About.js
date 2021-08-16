import React from "react";
import author from "../about.jpg";


function About() {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className= "col-lg-6 col-xm-12">
                    <div className= "photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                    
                </div>
                <div className= "col-lg-6 col-xm-12">
                    <h1 className="about-heading text-center">About Me</h1>
                    <p>My name is Bohlale Nkoana. I'm an up and coming <strong><i>Full Stack Web Developer.</i></strong> What this means is that whatever your technological needs may be, I can most probably assist. I'm particularly good at creating eye-catching designs, using software to solve existing problems, and providing support to what may intially seem like a complex problem.</p>
                    <small>My storng suits include Web Design, Database Administration, and Systems Development (Android, and MERN stack)</small>
                </div>
            </div>
        </div>
    )
}

export default About
