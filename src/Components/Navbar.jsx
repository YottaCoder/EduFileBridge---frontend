import React, { useState } from "react";
import { Link } from 'react-scroll';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import PopupsHandler from "../Utils/PopupsHandler"

const Navbar = () => {
    const [login, setLoginBtn] = useState("Login");

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <img className="web-logo" src="images/Web-Logo.png" alt="Web-Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link 
                                    className="nav-link active" 
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    Our Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link active" 
                                    to="View_marksheets"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={700}
                                >
                                    Find
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link active" 
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={700}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link active" 
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={700}
                                >
                                    Feedback
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="modal" data-bs-target="#loginModal">{login}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <PopupsHandler />
        </>
    );
}

export default Navbar;
