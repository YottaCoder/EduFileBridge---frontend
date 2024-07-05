import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TermAndCondition = ( {handleRegisterPopUp, handleLoginPopUp} ) => {
    return(
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start w-100">
                        <FontAwesomeIcon icon={faArrowLeft} className="back-arrow"  onClick={handleRegisterPopUp}/>
                        <p className="lead fw-normal mb-0 me-3">Term & Condition</p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
                <div className="divider d-flex align-items-center justify-content-center"></div>
                <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                    <div>
                        <h4>EduFileBridge - Terms and Conditions</h4>
                        <h6>1. Acceptance of Terms</h6>
                        <p>By accessing or using EduFileBridge, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use the service.</p>

                        <h6>2. Description of Service</h6>
                        <p>EduFileBridge is a platform designed to allow users to securely store and access academic mark sheets. Users are provided with a unique user code for accessing their stored mark sheets.</p>

                        <h6>3. User Responsibilities</h6>
                        <p><b>a.</b> Users are solely responsible for maintaining the confidentiality of their user code. EduFileBridge is not liable for any unauthorized access to user accounts.</p>
                        <p><b>b.</b> Users are responsible for the accuracy and legality of the mark sheets they upload to the service. EduFileBridge reserves the right to remove any content that violates these terms.</p>

                        <h6>4. Data Security</h6>
                        <p><b>a.</b> EduFileBridge employs industry-standard security measures to protect user data. However, no method of transmission over the internet or electronic storage is completely secure, and EduFileBridge cannot guarantee absolute security.</p>
                        <p><b>b.</b> Users are advised to take appropriate measures to protect their devices and user codes from unauthorized access.</p>

                        <h6>5. Use of Information</h6>
                        <p>EduFileBridge may collect and use personal information provided by users solely for the purpose of providing and improving the service. Users' personal information will not be shared with third parties without their consent, except as required by law.</p>

                        <h6>6. Limitation of Liability</h6>
                        <p>In no event shall EduFileBridge be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in any way connected with the use of the service.</p>

                        <h6>7. Modifications to Terms</h6>
                        <p>EduFileBridge reserves the right to modify or replace these terms and conditions at any time. Users will be notified of any changes, and continued use of the service after such modifications constitute acceptance of the new terms.</p>

                        <h6>8. Termination</h6>
                        <p>EduFileBridge reserves the right to suspend or terminate access to the service at any time for violation of these terms or for any other reason deemed necessary by EduFileBridge.</p>
                    </div>
                </div>
                <div className="text-center m-1 pt-2">
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <button type="button" className="btn btn-primary btn-md m-1" onClick={handleLoginPopUp}>Go To Login</button>
                        <button type="button" className="btn btn-primary btn-md m-1" onClick={handleRegisterPopUp}>Go To Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermAndCondition;
