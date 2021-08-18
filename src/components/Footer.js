import React from "react";
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon} from "react-share";
import {Link} from "react-scroll"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Gauteng South Africa</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:0824883029">082483029</a>
                        </div>
                        <div className="d-flex">
                        <a href="mailto:bohlalenkoana007@gmail.com">bohlalenkoana007@gmail.com</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="footer-nav" href="#">Home</Link>
                                <br/>
                                <Link smooth={true} to="about" className="footer-nav" href="#">About Me</Link>
                                <br/>
                                <Link smooth={true} to="services" className="footer-nav" href="#">Services</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" className="footer-nav" href="#">Work History</Link>
                                <br/>
                                <Link smooth={true} to="portfolio" className="footer-nav" href="#">Projects</Link>
                                <br/>
                                <Link smooth={true} to="contact" className="footer-nav" href="#">Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton url={"https://allthatchocolate.github.io/Portfolio/"} quote={"Fullstack Developer"} hashtag="#javascript">
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <TwitterShareButton url={"https://allthatchocolate.github.io/Portfolio/"} quote={"Fullstack Developer"} hashtag="#javascript">
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            <RedditShareButton url={"https://allthatchocolate.github.io/Portfolio/"} quote={"Fullstack Developer"} hashtag="#javascript">
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>

                            <LinkedinShareButton url={"https://allthatchocolate.github.io/Portfolio/"} quote={"Fullstack Developer"} hashtag="#javascript">
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright &copy;
                            {new Date().getFullYear()}&nbsp;Bohlale Nkoana | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
