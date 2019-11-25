import React, { Component } from 'react';
import axios from 'axios';

import iconLocation from '../../img/icons/location.png';
import iconEmail from '../../img/icons/email.png';
import iconPhone from '../../img/icons/phone.png';

class Contact extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    handleChange = event => {
        const {target: { name, value }} = event;
    
        this.setState(() => {
          return {
            [name]: value
          };
        });
    }


    handleSubmit = event => {
        event.preventDefault();

        const { firstName, lastName, email, message } = this.state;

        axios.post('http://localhost:5000/api/contact', {
            firstName, 
            lastName, 
            email, 
            message
        });

        this.setState(() => {
            return {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            };
        });

        document.querySelector("#contact-message").classList.remove('hide');
    }

    render () {
        const {
            firstName,
            lastName,
            email,
            message,
        } = this.state;

        return (
            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="row justify-content-lg-center">
                        <div className="col-lg-5 mb-3 mb-md-0">
                            <h2 className="">Request a call back</h2>
                            <div className="d-flex justify-content-start mt-4 pt-4">
                                <div className="icon-img text-center"><img src={iconLocation} alt="location" /></div>
                                <div>
                                    <h5>Address</h5>
                                    <p>890 W Pender St #440, Vancouver, BC V6C 1J9</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mt-4">
                                <div className="icon-img text-center"><img src={iconEmail} alt="email" /></div>
                                <div>
                                    <h5>Email</h5>
                                    <p>marketing@finhaven.com</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mt-4">
                                <div className="icon-img text-center"><img className="mx-auto" src={iconPhone} alt="phone" /></div>
                                <div>
                                    <h5>Phone</h5>
                                    <p>+1 (604) 643-1730</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-3 mb-md-0">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <input 
                                        type="text" 
                                        className="rounded-0 form-control" 
                                        id="firstName" 
                                        name="firstName" 
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <input 
                                        type="text" 
                                        className="rounded-0 form-control" 
                                        id="lastName" 
                                        name="lastName" 
                                        placeholder="Last Name" 
                                        value={lastName}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className="rounded-0 form-control" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <div>
                                        <textarea 
                                            className="rounded-0 form-control" 
                                            id="message" 
                                            name="message" 
                                            rows="5"
                                            placeholder="Message" 
                                            required
                                            value={message}
                                            onChange={this.handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" id="submit" className="rounded-0 btn btn-primary submit-btn">Send Message</button>
                                </div>
                                <div className="text-center hide mt-3" id="contact-message">
                                    <p>Thank you. We'll get back to you shortly.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row d-lg-none px-3">
                        <div className="col">
                            <div className="social-mobile d-flex justify-content-center">
                            <a href="#" className="mx-3">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="mx-3">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="mx-3">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row d-lg-block d-none">
                        <div className="social d-flex justify-content-center">
                            <a href="https://www.facebook.com/finhaven/" className="mx-5 row">
                            <p className="col"><span><i className="fab fa-facebook-f mr-2"></i></span>Facebook</p>
                            </a>
                            <a href="https://twitter.com/finhavenhq" className="mx-5">
                            <p className="col"><span><i className="fab fa-twitter mr-2"></i></span>Twitter</p>
                            </a>
                            <a href="https://www.linkedin.com/company/finhaven/" className="mx-5">
                            <p className="col"><span><i className="fab fa-linkedin mr-2"></i></span>Linkedin</p>
                            </a>
                        </div>  
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;