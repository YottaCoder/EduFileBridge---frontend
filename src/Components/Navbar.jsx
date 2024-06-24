import React, { useState } from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Popups from "./Popups";

const Navbar = () => {
    const [login, setLoginBtn] = useState("Login");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/"><img className="web-logo" src="images/Web-Logo.png" alt="Web-Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Get_Started">Get Started</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Save_marksheet">Save Marksheet</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/View_marksheets">View Marksheets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="modal" data-bs-target="#loginModal">{login}</a>
                        </li>
                            <Popups />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
