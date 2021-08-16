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
                                <h3>Full Stack Web Development</h3>
                                <p>Using a wide array of frameworks and technologies, i develop websites that do a whole bunch of shit</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circles"><FontAwesomeIcon className="iconss" icon={faFolder} size="2x" /></div>
                            <i class="far fa-folder"></i>
                                <h3>Database Administration</h3>
                                <p>I wa doing database administration ko NSG which involves working with SQL Server, MS Access, and RDC</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circles"><FontAwesomeIcon className="iconss" icon={faGrimace} size="2x" /></div>
                            <i class="fas fa-grimace"></i>
                                <h3>Front End Design</h3>
                                <p>Using an Array of Libraries and technologies,  I'm able to create visully captivating Front Ends for Websites to use </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circles"><FontAwesomeIcon className="iconss" icon={faCloud} size="2x" /></div>
                            <i class="fab fa-cloudversify"></i>
                                <h3>Tech Stack</h3>
                                <p><i>HTML, CSS, VanillaJS, AngularJS, ReactJS, EmailJS, ParticlesJS, C#, SQL, SSMS, WordPress, .Net Web API, Entity framework, MS Access Forms, RDC, NodeJS, Bootstrap, MaterialUI</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Services;
