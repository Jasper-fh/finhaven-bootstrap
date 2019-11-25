import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../img/logo.svg'

class Header extends Component {
    componentDidMount() {
        let yPosition = window.scrollY;
        let screenWidth = window.innerWidth;
        const navbar = document.querySelector('nav');

        if (screenWidth < 997) {
            navbar.classList.add("darken-nav");
        } else {
            navbar.classList.remove("darken-nav");
        }
        
        window.addEventListener('scroll', function(e) {
            yPosition = window.scrollY;
        
            if (yPosition > 50) {
                navbar.classList.add("darken-nav");
            } else {
                navbar.classList.remove("darken-nav");
            }
        });

        window.addEventListener('resize', (e) => {
            screenWidth = window.innerWidth;;

            if (screenWidth < 997) {
                navbar.classList.add("darken-nav");
            } else {
                navbar.classList.remove("darken-nav");
            }
        });
    }

    render() {
      return (
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="tansparent" variant="dark" className="">
            <Navbar.Brand href="#home" className="ml-5 pl-3 d-lg-block d-none">
                <img
                    src={logo}
                    width="137"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Brand href="#home" className="d-lg-none">
                <img
                    src={logo}
                    width="137"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mr-4">
                    <NavDropdown title="PLATFORMS" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Finhaven Trading</NavDropdown.Item>
                        <NavDropdown.Item href="#">Finhaven Club</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">ABOUT US</Nav.Link>
                    <Nav.Link href="#">MEDIA</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }
}

export default Header;