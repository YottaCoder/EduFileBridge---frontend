import React, { useState } from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Popups from "./Popups";

const Navbar = () => {
    const [login, setLoginBtn] = useState("Login");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <img className="web-logo" src="images/Web-Logo.png" alt="Web-Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Get_Started">Our Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/View_marksheets">Find</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Contact">Feedback</Link>
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
