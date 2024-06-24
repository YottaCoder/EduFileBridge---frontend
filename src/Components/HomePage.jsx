import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container-fluid homepage-container">
      <video
        src="/images/liquid_-_4382.mp4"
        autoPlay
        muted
        loop
        className="full-width-video"
      ></video>
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white centered-items">
        <p className="display-1 centered-text">EduFileBridge</p>
        <p className="display-6 paragraph">
          EduFileBridge offers seamless access to stored academic mark sheets.
          Effortlessly manage and retrieve your transcripts online, ensuring
          quick and reliable access whenever needed through EduFileBridge.
        </p>
        <Link to="/Get_Started" className="btn btn-light started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;