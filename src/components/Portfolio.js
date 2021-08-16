import React from 'react'
import pr1 from "../images/1.JPG";
import pr2 from "../images/2.JPG";
import portfolio from "../images/portfolio.jpg";
import CV from "../images/CV.pdf"
//Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//React popup box
import "react-popupbox/dist/react-popupbox.css";
import {PopupboxManager, PopupboxContainer} from "react-popupbox"



function Portfolio() {

    //Project 1
    const openPopupboxMyHope = () => {
        const content =(
        <>
        <img className="portfolio-image-popupbox" src={pr1} alt="MyHope Web Portal" />
        <p> This is a web portal designed to help train staff and provide them with user-manuals and shit.</p>
        <b>Demo</b> <a className="hyper-link" onClick={() => window.open("http://197.242.64.234:81/wordpress", "_blank")} >http://197.242.64.234:81/wordpress</a>
    </>
        )
        PopupboxManager.open({content});
    }

    const popupConfigMyHope = {
           titleBar: {
               enable: true,
               text: "MyHope Web Portal"
           },
           fadeIn: true,
           fadeInSpeed: 500
    }

    //Project 2: Application For Leave
    const openPopupboxApp4Leave = () => {
        const content =(
        <>
        <img className="portfolio-image-popupbox" src={pr2} alt="App4Leave Project" />
        <p> This is an application designed to be used by HR departments within companies to book leave for employees</p>
        <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("#")} >Insert GitHub Link Here</a>
    </>
        )
        PopupboxManager.open({content});
    }

    const popupConfigApp4Leave = {
           titleBar: {
               enable: true,
               text: "Applicatiion For Leave"
           },
           fadeIn: true,
           fadeInSpeed: 500
    }

    //Portfolio
    const openPopupboxPortfolio = () => {
        const content =(
        <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio" />
        <p> This portfolio was designed using React.JS, Particles.JS, and Bootstrap.JS</p>
        <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("http://197.242.64.234:81/wordpress", "_blank")} >http://197.242.64.234:81/wordpress</a>
    </>
        )
        PopupboxManager.open({content});
    }

    const popupConfigPortfolio = {
           titleBar: {
               enable: true,
               text: "Portfolio"
           },
           fadeIn: true,
           fadeInSpeed: 500
    }

    

    return (
            <div id="portfolio" className="portfolio wrapper">
                <div className="container">
                    <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                    <div className="image-box-wrapper row justify-content-center">
                        <div className="portfolio-image-box col-md-3" onClick={openPopupboxMyHope}> 
                            <img className="portfolio-image" src={pr1} alt="MyHope Web Portal WordPress Project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                        <div className="portfolio-image-box col-md-3" onClick={openPopupboxApp4Leave}>
                            <img className="portfolio-image" src={pr2} alt="Application For Leave Angular.JS .Net Web API Project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                        <div className="portfolio-image-box col-md-3" onClick={openPopupboxPortfolio}>
                            <img className="portfolio-image" src={portfolio} alt="Portfolio ReactJS and Bootstrap 4 Project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                        <br/><br/><br/><br/>
                        <a href={CV} className="text-center portfolio-image-box col-md-3 btn" target="_blank">
                                <h3>Click Here to view my CV</h3>
                        </a>
                    </div>
                </div>
                <PopupboxContainer {...popupConfigMyHope} />
                <PopupboxContainer {...popupConfigApp4Leave} />
                <PopupboxContainer {...popupConfigPortfolio} />
            </div>
        
    )
}

export default Portfolio
