import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCode, faFolder, faGrimace } from '@fortawesome/free-solid-svg-icons';



function Services() {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <i class="fab fa-internet-explorer"></i>
                            <div className="circles"><FontAwesomeIcon className="iconss" icon={faCode} size="2x" /></div>
                                <h3>Software Engineering</h3>
                                <p>Using a wide array of frameworks and technologies, I develop systems that that aim to address <i>user-specific</i> problems in an aesthetically pleasing manner</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circles"><FontAwesomeIcon className="iconss" icon={faFolder} size="2x" /></div>
                            <i class="far fa-folder"></i>
                                <h3>Database Administration</h3>
                                <p>A strong working knowledge of SQL allows me to be able to analyse, write, and debug SQL scripts while also incorporating working knowledge of SQL Server Management Studio, MS Access, and RDC</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circles"><FontAwesomeIcon className="iconss" icon={faGrimace} size="2x" /></div>
                            <i class="fas fa-grimace"></i>
                                <h3>Full Stack Web Developer</h3>
                                <p>Through the use of a variety of libraries and technologies,  I am able to create visully captivating websites that have a wide range of functionality</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circles"><FontAwesomeIcon className="iconss" icon={faCloud} size="2x" /></div>
                            <i class="fab fa-cloudversify"></i>
                                <h3>Tech Stack</h3>
                                <p><i>HTML, CSS, Javascript <b>(VanillaJS, AngularJS, ReactJS, EmailJS, NodeJS, ParticlesJS)</b> C#, SQL, SSMS, WordPress, .Net Web API, Entity framework, MS Access Forms, RDC, Bootstrap</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Services;
