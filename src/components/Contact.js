import React from "react";
import emailjs from "emailjs-com";


const Contact = () => {


    const serviceID ="service_ID";
    const templateID="template_ID"
    const userID ="user_fi74nu4gYSAybOncCxdGv";
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then((result) => {
            console.log(result.text);
            alert("Your message has been sent");
        }, (error) => {
            console.log(error.text);
            alert("It seems an error has occured");
        })
    }


    return (
        <div id="contact" className="contacts">


            <div className="text-center">
                <h1>Contact Me</h1>
                <p>If you've gotten this far then I'm sure you're as excited as me to work together. <i><strong>Please fill out the form and describe your project needs.</strong></i> I will get in contact with you as soon as possible</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <input  type="text" className="form-control" placeholder="Name" name="name"/> 
                                <div className="line"></div>
                            </div>

                            <div className="text-center">
                                <input  type="text" className="form-control" placeholder="Phone" name="phone"/>
                                <div className="line"></div>
                            </div>

                            <div className="text-center">
                                <input  type="email" className="form-control" placeholder="Email" name="email"/>
                                <div className="line"></div>
                            </div>

                            <div className="text-center">
                                <input  type="text" className="form-control" placeholder="Subject" name="Subject"/>
                                <div className="line"></div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea type="text" className="form-control" placeholder="Please describe you issue as concisely as possible" name="description"></textarea>
                                <div className="line"></div>   
                            </div>  
                            <button className="btn-main-offer contact-btn" type="Submit">Get In Touch</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;

