import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ForgotPass3 = ({ handleForgotPass2 }) => {
    const[showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  
    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start w-100">
                        <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" onClick={ handleForgotPass2 } />
                        <p className="lead fw-normal mb-0 me-3">Forgot Password</p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="modal-body">
                    <form>
                        <div className="input-group mb-3">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        id="form3Example4" 
                                        className="form-control form-control-lg password-input" 
                                        placeholder="Set password" 
                                    />
                                    <button 
                                        className="btn btn-outline-secondary password-show-hide" 
                                        type="button" 
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </button>
                        </div>
                        <div className="input-group mb-3">
                                    <input 
                                        type={showConfirmPassword ? "text" : "password"} 
                                        id="form3Example4" 
                                        className="form-control form-control-lg password-input" 
                                        placeholder="Confirm password" 
                                    />
                                    <button 
                                        className="btn btn-outline-secondary password-show-hide" 
                                        type="button" 
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                                    </button>
                        </div>
                        <div className="d-flex flex-row align-content-center justify-content-center mt-1 pt-2 mb-5">
                            <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass3;