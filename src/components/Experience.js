import React from 'react'

function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">

            <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021- Current</h3>
                        <h6><strong>Database Administrator at The National School Of Government</strong> with the following reponsibilites:</h6>
                        <p>Analysing and Supporting Database using SSMS, MS Access, RDC</p><br/>
                        <p> Writing custom SQL Scripts to fix any backend issues</p>
                    </div>  
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021- Current</h3>
                        <h6><strong>Trainee Developer at eSoftware Solutions</strong> with the following reponsibilites:</h6>
                        <p>CRUD Application Development using Angular.JS, MS SSMS, Entity Framework and a .Net Web API</p>
                    </div>  
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020- 2021</h3>
                        <h6><strong>Internship at Grace Christian Private School</strong> with the following responsibilities</h6>
                        <p>Web Development, deployment, and maintenece using WordPress, Elementor ad RDC</p>
                        <p>Installing machinery and troubleshooting IT related issues exeprienced by staff</p>
                        <p>Taught HTML to some kids</p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016- 2016</h3>
                        <h6><strong>Internship at CSIR</strong> with the following responsibilities:</h6>
                        <p>Front End Application development using Android Studio and Java</p>
                        <p>Partially responsible for the redesign of the "CMore" app that can be found on Google App store</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
