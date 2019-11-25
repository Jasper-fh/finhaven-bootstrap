import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../img/logo.svg'

const Footer = () => {
    return (
        <footer className="small text-white-50">
            <div className="container">
                <div className="row d-flex justify-content-center footer-container">
                    <div className="col-md-6">
                        <div className="row mt-3 d-flex justify-content-around">
                            <div className="col-6 footer-col">
                                <h5 className="footer-column-header mb-3">ABOUT US</h5>
                                <p><a>Team</a></p>
                                <p><a>Careers</a></p>
                            </div>
                            <div className="col-6 footer-col">
                                <h5 className="footer-column-header mb-3">MEDIA</h5>
                                <p><a>Blog</a></p>
                                <p><a>Pddcast</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row mt-3 d-flex justify-content-around">
                            <div className="col-6 footer-col">
                                <h5 className="footer-column-header mb-3">LEGAL</h5>
                                <p><a>Privacy</a></p>
                                <p><a>Security</a></p>
                                <p><a>Terms of Use</a></p>
                            </div>
                            <div className="col-6 footer-col">
                                <h5 className="footer-column-header mb-3">PLATFORMS</h5>
                                <p><a>Finhaven Trading</a></p>
                                <p><a>Finhaven Trading FAQ</a></p>
                                <p><a>Finhaven Club</a></p>
                                <p><a>Finhaven Club FAQ</a></p>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="text-center mt-4">
                    <img
                        src={logo}
                        width="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <p>Copyright &copy; Finhaven Technology Inc. 2019</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;