import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = ({ handleRegisterPopUp, handleForgotPass1 }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">Login with</p>
                            <button type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                <FontAwesomeIcon icon={faGoogle} />
                            </button>
                            <button type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                <FontAwesomeIcon icon={faTwitter} />
                            </button>
                            <button type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </button>
                            <button type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="divider d-flex align-items-center justify-content-center">
                        <p className="fw-bold mx-3 mb-0">Or</p>
                    </div>
                    <div className="modal-body">
                        {/* <!-- Login Form --> */}
                        <form>
                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    id="form3Example4" 
                                    className="form-control form-control-lg password-input" 
                                    placeholder="Enter password" 
                                />
                                <button 
                                    className="btn btn-outline-secondary password-show-hide" 
                                    type="button" 
                                    onClick={togglePasswordVisibility}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a className="text-body fgt-pass" onClick={ handleForgotPass1 }>Forgot password?</a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a className="link-danger" onClick={handleRegisterPopUp}>Register</a></p>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Login;