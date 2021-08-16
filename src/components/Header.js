import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll"

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Bohlale Nkoana </h1><br/><h3>Software Developer Extrordinaire</h3>
                <Typed 
                    className="typed-text" strings={["Full Stack Developer", "Database Analyst", "Web Developer", "Front End Design"]} typeSpeed={40} backSpeed={60} loop
                />
                <Link smooth={true} to="contact" offset={-110} className="nav-link btn-main-offer" href="#">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header;
