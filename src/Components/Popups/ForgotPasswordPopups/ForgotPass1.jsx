import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ForgotPass1 = ({ handleLoginPopUp, handleForgotPass2 }) => {
    return (
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start w-100">
                        <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" onClick={handleLoginPopUp} />
                        <p className="lead fw-normal mb-0 me-3">Forgot Password</p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="modal-body">
                    <form>
                        <div className="form-outline mb-1 mt-5">
                            <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                        </div>
                        <div className="d-flex flex-row align-content-center justify-content-center mt-1 pt-2 mb-5">
                            <button type="button" className="btn btn-primary btn-lg" onClick={ handleForgotPass2 } style={{paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass1;
