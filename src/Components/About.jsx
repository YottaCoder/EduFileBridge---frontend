import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMedal, faBullseye } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about-section text-center align-item-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/images/About image.jpg" alt="About Image" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>ABOUT EDUFILEBRIDGE</h2>
            <p>
            EdufileBridge is a user-friendly platform designed to 
            securely save and share marksheets. Our goal is to provide a 
            seamless experience where anyone can easily access and verify 
            academic records online, ensuring transparency and convenience for
            students, educators, and institutions alike.
            </p>
            <p>
            Feel free to modify it to better suit your project's specific features and goals!
            </p>
            <div className="divider">
              <hr className="my-4" />
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 col-4 icon">
                <FontAwesomeIcon icon={faStar} size="3x" />
                <p>Vision</p>
              </div>
              <div className="col-md-4 col-4 icon">
                <FontAwesomeIcon icon={faMedal} size="3x" />
                <p>Missions</p>
              </div>
              <div className="col-md-4 col-4 icon">
                <FontAwesomeIcon icon={faBullseye} size="3x" />
                <p>Goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
