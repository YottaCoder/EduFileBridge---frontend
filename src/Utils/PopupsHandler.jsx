import React, { useState, useEffect } from "react";

import Login from "../Components/Popups/Login";
import Register from "../Components/Popups/Register";
import ForgotPass1 from "../Components/Popups/ForgotPasswordPopups/ForgotPass1";
import ForgotPass2 from "../Components/Popups/ForgotPasswordPopups/ForgotPass2";
import ForgotPass3 from "../Components/Popups/ForgotPasswordPopups/ForgotPass3";
import TermAndCondition from "../Components/Popups/TermAndCondition";
import EmailVerify from "../Components/Popups/EmailVerify";
import { faLess } from "@fortawesome/free-brands-svg-icons";

const Popups = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showEmailConfirm, setShowEmailConfirm] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showTAndCModal, setShowTAndCModal] = useState(false);
  const [showForgotPass1, setShowForgotPass1] = useState(false);
  const [showForgotPass2, setShowForgotPass2] = useState(false);
  const [showForgotPass3, setShowForgotPass3] = useState(false);

  const handleLoginPopUp = () => {
    setShowTAndCModal(false);
    setShowForgotPass1(false);
    setShowRegisterModal(false);
    setShowForgotPass2(false);
    setShowForgotPass3(false);
    setShowEmailConfirm(false)
    setShowLoginModal(true);
  };
  
  const handleRegisterPopUp = () => {
    setShowTAndCModal(false);
    setShowForgotPass1(false);
    setShowLoginModal(false); 
    setShowForgotPass2(false);
    setShowForgotPass3(false);
    setShowEmailConfirm(false)
    setShowRegisterModal(true);
  };

  const handleEmailConfirm = () => {
    setShowTAndCModal(false);
    setShowForgotPass1(false);
    setShowLoginModal(false); 
    setShowForgotPass2(false);
    setShowForgotPass3(false);
    setShowRegisterModal(false);
    setShowEmailConfirm(true);
  }

  const handleTAndCPopUp = () => {
    setShowRegisterModal(false);
    setShowLoginModal(false);
    setShowForgotPass1(false);
    setShowForgotPass2(false);
    setShowForgotPass3(false);
    setShowEmailConfirm(false)
    setShowTAndCModal(true);
  };

  const handleForgotPass1 = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setShowTAndCModal(false);
    setShowForgotPass2(false);
    setShowForgotPass3(false);
    setShowEmailConfirm(false)
    setShowForgotPass1(true);
  };

  const handleForgotPass2 = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setShowTAndCModal(false);
    setShowForgotPass1(false);
    setShowForgotPass3(false);
    setShowEmailConfirm(false)
    setShowForgotPass2(true);
  };

  
  const handleForgotPass3 = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setShowTAndCModal(false);
    setShowForgotPass1(false);
    setShowForgotPass2(false);
    setShowEmailConfirm(false)
    setShowForgotPass3(true);
  };


  return (
    <>
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="false">
        
        { showLoginModal && ( <Login handleRegisterPopUp={handleRegisterPopUp} handleForgotPass1={handleForgotPass1} /> ) }

        { showRegisterModal && ( <Register handleLoginPopUp={handleLoginPopUp} handleTAndCPopUp={handleTAndCPopUp} handleEmailConfirm={handleEmailConfirm} />) }

        {showTAndCModal && ( <TermAndCondition handleRegisterPopUp={handleRegisterPopUp} handleLoginPopUp={handleLoginPopUp} /> ) }

        {showForgotPass1 && (<ForgotPass1 handleLoginPopUp={handleLoginPopUp} handleForgotPass2={handleForgotPass2} />)}

        { showForgotPass2 && (<ForgotPass2 handleForgotPass1={handleForgotPass1} handleForgotPass3={handleForgotPass3} />) }
        
        { showForgotPass3 && (<ForgotPass3 handleForgotPass2={handleForgotPass2} />) }

        { showEmailConfirm && (<EmailVerify handleRegisterPopUp={handleRegisterPopUp} />) }
      </div>
    </>
  );
}

export default Popups;
