import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="container-fluid position-relative homepage-container">
      <img
        src="/images/Bg.jpg"
        className="img-fluid full-width-picture"
        alt="Background"
      />
      <div className="row position-absolute top-50 end-0 translate-middle-y text-end text-black p-4 mx-0 w-100">
        <div className="col-lg-4 col-md-6 col-sm-8 col-10 ms-auto centered-items">
          <p className="display-6">
            EduFileBridge offers seamless access to stored academic mark sheets.
            Effortlessly manage and retrieve your transcripts online, ensuring
            quick and reliable access whenever needed through EduFileBridge.
          </p>
          <Link to="/Get_Started" className="btn btn-light btn-lg">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
