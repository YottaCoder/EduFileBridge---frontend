import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGem, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="text-center text-lg-start bg-dark text-white">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* Right */}
                    <div>
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </section>
                {/* Section: Social media */}

                {/* Section: Links  */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <FontAwesomeIcon icon={faGem} className="me-3" />EduFileBridge
                                </h6>
                                <p>
                                Save, access mark sheets anytime. Secure, user-friendly platform. Store academic records digitally. 
                                Retrieve with ease. Say goodbye to paperwork hassle. Experience convenience
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Services
                                </h6>
                                <p>
                                    <Link to="/Get_Started" className="text-reset">Get Started</Link>
                                </p>
                                <p>
                                    <Link to="/Save_marksheet" className="text-reset">Save Marksheet</Link>
                                </p>
                                <p>
                                    <Link to="/View_marksheets" className="text-reset">View Marksheets</Link>
                                </p>
                                <p>
                                    <Link to="/About" className="text-reset">About</Link>
                                </p>
                                <p>
                                    <Link to="/Contact" className="text-reset">Contact</Link>
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">My portfolio</a>
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><FontAwesomeIcon icon={faHome} className="me-3" /> Gujarat, India</p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                                        solankirohit8703@gmail.com
                                </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
            </footer>
            {/* Footer */}
        </>
    );
}

export default Footer;