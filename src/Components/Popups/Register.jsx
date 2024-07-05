import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = ({ handleLoginPopUp, handleTAndCPopUp,handleEmailConfirm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const registerUser = async () => {
    if(password === confirmPassword){
      try {
        const response = await axios.post('http://localhost:8000/api/v1/user/register', {
          fullName,
          email,
          password,
        });
        console.log('User registered:', response.data);
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
    else{
      alert("Password and Confirm Password not same")
    }
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Register with</p>
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
            <form>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="fullName"
                  className="form-control form-control-lg"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a Valid Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-control form-control-lg password-input"
                  placeholder="Set password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  id="confirmPassword"
                  className="form-control form-control-lg password-input"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary password-show-hide"
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="small fw-medium mt-2 pt-1 mb-0 ms-auto">
                  Please read <a className="text-body" onClick={handleTAndCPopUp}>Term & Condition</a>
                </p>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg mx-auto"
                  onClick={handleEmailConfirm}
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  I have Already <a className="link-danger" onClick={handleLoginPopUp}>Account</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
