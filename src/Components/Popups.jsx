import React, {useState} from "react";

import Register from "./Register";
import Login from "./Login";
import TermAndCondition from "./TermAndCondition";
import ForgotPass1 from "./ForgotPasswordPages/ForgotPass1";
import ForgotPass2 from "./ForgotPasswordPages/ForgotPass2";
import ForgotPass3 from "./ForgotPasswordPages/ForgotPass3";

const Popups = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showTAndCModal, setshowTAndCModal] = useState(false);
  const [showForgotPass1, setShowForgotPass1] = useState(false);
  const [showForgotPass2, setShowForgotPass2] = useState(false);
  const [showForgotPass3, setShowForgotPass3] = useState(false);

  const handleLoginPopUp = () => {
    setshowTAndCModal(false);
    setShowForgotPass1(false);
    setShowRegisterModal(false);
    setShowForgotPass2(false);
    setShowForgotPass3(false);
    setShowLoginModal(true);
  };
  
  const handleRegisterPopUp = () => {
    setshowTAndCModal(false);
    setShowForgotPass1(false);
    setShowLoginModal(false); 
    setShowForgotPass2(false);
    setShowForgotPass3(false);
    setShowRegisterModal(true);
  };

  const handleTAndCPopUp = () => {
    setShowRegisterModal(false);
    setShowLoginModal(false);
    setShowForgotPass1(false);
    setShowForgotPass2(false);
    setShowForgotPass3(false);
    setshowTAndCModal(true);
  };

  const handleForgotPass1 = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setshowTAndCModal(false);
    setShowForgotPass2(false);
    setShowForgotPass3(false);
    setShowForgotPass1(true);
  };

  const handleForgotPass2 = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setshowTAndCModal(false);
    setShowForgotPass1(false);
    setShowForgotPass3(false);
    setShowForgotPass2(true);
  };

  
  const handleForgotPass3 = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setshowTAndCModal(false);
    setShowForgotPass1(false);
    setShowForgotPass2(false);
    setShowForgotPass3(true);
  };

  return (
    <>
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="false">
        { showLoginModal && ( <Login handleRegisterPopUp = { handleRegisterPopUp } handleForgotPass1 = {handleForgotPass1} /> ) }

        { showRegisterModal && ( <Register handleLoginPopUp = { handleLoginPopUp } handleTAndCPopUp={handleTAndCPopUp} />) }

        {showTAndCModal && ( <TermAndCondition handleRegisterPopUp = {handleRegisterPopUp} handleLoginPopUp = {handleLoginPopUp} /> ) }

        {showForgotPass1 && (<ForgotPass1 handleLoginPopUp = { handleLoginPopUp } handleForgotPass2 = { handleForgotPass2 } />)}

        { showForgotPass2 && (<ForgotPass2 handleForgotPass1 = {handleForgotPass1} handleForgotPass3 = { handleForgotPass3 } />) }
        
        { showForgotPass3 && (<ForgotPass3 handleForgotPass2 = { handleForgotPass2 } />) }

      </div>
    </>
  );
}

export default Popups;